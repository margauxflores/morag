import styles from './GaugeChart.module.css';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

type Props = {
  percentage: number;
  title: string;
};

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export const GaugeChart = ({ percentage, title }: Props) => {
  const data = [{ value: percentage }, { value: 100 - percentage }];

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cy={'70%'}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            <Cell fill="#00C49F" />
            <Cell fill="#eeeeee" stroke="#eeeeee" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <span className={styles.label}>{`${percentage}%`}</span>
    </div>
  );
};
