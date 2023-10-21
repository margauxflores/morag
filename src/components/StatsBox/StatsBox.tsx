type StatData = {
  name: string;
  stat: string;
};

type Props = {
  title: string;
  data: StatData[];
};

export const StatsBox = ({ title, data }: Props) => {
  return (
    <div className="mb-14">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {title}
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
