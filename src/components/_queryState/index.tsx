'use client';

import { useEffect } from 'react';
import useFilterStore from '@/store/filter.store';
import { useQueryClient } from '@tanstack/react-query';

const QueryState = ({ children }: any) => {
  const queryClient = useQueryClient();
  const { filters } = useFilterStore((state: any) => ({
    filters: state.filters,
    setFilters: state.setFilters,
  }));

  useEffect(() => {
    queryClient.invalidateQueries();
  }, [filters, queryClient]);

  return <div>{children}</div>;
};

export default QueryState;
