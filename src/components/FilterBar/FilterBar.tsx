'use client';

import { Fragment, useEffect, useReducer, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import useFilterStore, { FiltersState } from '@/store/filter.store';
import { useRouter } from 'next/navigation';

interface Vessel {
  id: number;
  name: string;
}

interface FiscalYear {
  id: number;
  name: string;
}

interface Quarter {
  id: number;
  name: string;
}

// Define the types for your state
type FilterState = {
  selectedVessel: Vessel | null;
  selectedFiscalYear: FiscalYear | null;
  selectedQuarter: Quarter | null;
  startDate: string;
  endDate: string;
};

// Define the types for your actions
type Action =
  | { type: 'UPDATE'; payload: Partial<FilterState> }
  | { type: 'RESET' };

const vessels = [
  { id: 1, name: 'Hakuho-Maru' },
  { id: 2, name: 'Shinsei-Maru' },
  { id: 3, name: 'Yokosuka' },
  { id: 4, name: 'Kairei' },
  { id: 5, name: 'Mirai' },
  { id: 6, name: 'Kaimei' },
];

const generateFiscalYears = (startYear: number) => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push({ id: year - startYear + 1, name: year.toString() });
  }

  return years;
};

const fiscalYears = generateFiscalYears(2019);

const quarters = [
  { id: 1, name: 'Q1' },
  { id: 2, name: 'Q2' },
  { id: 3, name: 'Q3' },
  { id: 4, name: 'Q4' },
];

const initialFilterState = {
  selectedVessel: null,
  selectedFiscalYear: null,
  selectedQuarter: null,
  startDate: '',
  endDate: '',
};

const reducer = (state: FilterState, action: Action): FilterState => {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...action.payload };
    case 'RESET':
      return initialFilterState;
    default:
      return state;
  }
};

export const FilterBar = ({}) => {
  const { filters, setFilters } = useFilterStore((state: any) => ({
    filters: state.filters,
    setFilters: state.setFilters,
  }));
  const [filterOptions, dispatch] = useReducer(reducer, initialFilterState);

  const router = useRouter();

  const setFilterOptions = (next: Partial<FilterState>) => {
    dispatch({ type: 'UPDATE', payload: next });
  };

  useEffect(() => {
    // Initialize state from filters context
    if (filters.vessel)
      setFilterOptions({
        selectedVessel: vessels.find((v) => v.id === filters.vessel) || null,
      });
    if (filters.fiscalYear)
      setFilterOptions({
        selectedFiscalYear:
          fiscalYears.find((fy) => fy.name === filters.fiscalYear) || null,
      });
    if (filters.quarter)
      setFilterOptions({
        selectedQuarter:
          quarters.find((q) => q.name === filters.quarter) || null,
      });

    if (filters.startDate) setFilterOptions({ startDate: filters.startDate });
    if (filters.endDate) setFilterOptions({ endDate: filters.endDate });
  }, [filters]);

  const updateQueryParams = (newFilters: Partial<FiltersState>) => {
    const params = new URLSearchParams();
    if (newFilters.vessel) params.set('vessel', newFilters.vessel.toString());
    if (newFilters.fiscalYear) params.set('fiscalYear', newFilters.fiscalYear);
    if (newFilters.quarter) params.set('quarter', newFilters.quarter);
    if (newFilters.startDate) params.set('startDate', newFilters.startDate);
    if (newFilters.endDate) params.set('endDate', newFilters.endDate);

    router.replace(`${window.location.pathname}?${params.toString()}`);
  };

  const onClickFilter = () => {
    const newFilters: Partial<FiltersState> = {
      vessel: filterOptions.selectedVessel?.id || null,
      fiscalYear: filterOptions.selectedFiscalYear?.name || '',
      quarter: filterOptions.selectedQuarter?.name || '',
      startDate: filterOptions.startDate || '',
      endDate: filterOptions.endDate || '',
    };

    setFilters(newFilters);
    updateQueryParams(newFilters);
  };

  const onClickReset = () => {
    dispatch({ type: 'RESET' });
    router.replace(window.location.pathname);
    setFilters(initialFilterState);
  };

  return (
    <div className="rounded-lg bg-white px-4 py-5 shadow sm:p-6 mb-20">
      <dt className="truncate text-sm font-medium text-gray-500 mb-4">
        Filter
      </dt>
      <dd className="flex gap-4 items-center">
        {/* Vessel */}
        <div className="w-full">
          <Listbox
            value={filterOptions.selectedVessel}
            onChange={(value) => setFilterOptions({ selectedVessel: value })}
          >
            {({ open }) => (
              <>
                <Listbox.Label className="block text-xs font-medium leading-6 text-gray-900">
                  Vessel
                </Listbox.Label>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <span className="block truncate">
                      {filterOptions.selectedVessel
                        ? filterOptions.selectedVessel.name
                        : 'Select a vessel'}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {vessels.map((vessel) => (
                        <Listbox.Option
                          key={vessel.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9',
                            )
                          }
                          value={vessel}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'block truncate',
                                )}
                              >
                                {vessel.name}
                              </span>
                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        {/* Fiscal Year */}
        <div className="w-full">
          <Listbox
            value={filterOptions.selectedFiscalYear}
            onChange={(value) =>
              setFilterOptions({ selectedFiscalYear: value })
            }
          >
            {({ open }) => (
              <>
                <Listbox.Label className="block text-xs font-medium leading-6 text-gray-900">
                  Fiscal Year
                </Listbox.Label>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <span className="block truncate">
                      {filterOptions.selectedFiscalYear
                        ? filterOptions.selectedFiscalYear.name
                        : 'Select a fiscal year'}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {fiscalYears.map((fiscalYear) => (
                        <Listbox.Option
                          key={fiscalYear.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9',
                            )
                          }
                          value={fiscalYear}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'block truncate',
                                )}
                              >
                                {fiscalYear.name}
                              </span>
                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        {/* Quarter */}
        <div className="w-full">
          <Listbox
            value={filterOptions.selectedQuarter}
            onChange={(value) => setFilterOptions({ selectedQuarter: value })}
          >
            {({ open }) => (
              <>
                <Listbox.Label className="block text-xs font-medium leading-6 text-gray-900">
                  Quarter
                </Listbox.Label>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <span className="block truncate">
                      {filterOptions.selectedQuarter
                        ? filterOptions.selectedQuarter.name
                        : 'Select a quarter'}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {quarters.map((quarter) => (
                        <Listbox.Option
                          key={quarter.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9',
                            )
                          }
                          value={quarter}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'block truncate',
                                )}
                              >
                                {quarter.name}
                              </span>
                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        {/* Start Date */}
        <div className="w-full">
          <label
            htmlFor="start-date"
            className="block text-xs font-medium leading-6 text-gray-900"
          >
            Start Date
          </label>
          <input
            type="date"
            id="start-date"
            className="mt-2 block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={filterOptions.startDate}
            onChange={(e) => setFilterOptions({ startDate: e.target.value })}
          />
        </div>

        {/* End Date */}
        <div className="w-full">
          <label
            htmlFor="end-date"
            className="block text-xs font-medium leading-6 text-gray-900"
          >
            End Date
          </label>
          <input
            type="date"
            id="end-date"
            className="mt-2 block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={filterOptions.endDate}
            onChange={(e) => setFilterOptions({ endDate: e.target.value })}
          />
        </div>

        <div className="w-full flex self-end gap-2">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full max-w-[150px]"
            onClick={onClickFilter}
          >
            Filter
          </button>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full max-w-[150px]"
            onClick={onClickReset}
          >
            Reset
          </button>
        </div>
      </dd>
    </div>
  );
};
