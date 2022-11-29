const barChartTasks = [
  {
    "task": 1 ,
    "selection": 1
  },
  {
    "task": 2 ,
    "selection": 2
  },
  {
    "task": 3,
    "selection": 3
  }
];

const scatterPlotTasks = [
  {
    "task": 1 ,
    "selection": 1
  },
  {
    "task": 2 ,
    "selection": 2
  },
  {
    "task": 3,
    "selection": 3
  }
]

export const getBarchartTasks = () => {
    return barChartTasks;
}


export const getScatterplotTasks = () => {
    return scatterPlotTasks;
}

export const getTaskById = (task) => {
  return barChartTasks.find(item => item.task === Number(task));
}
