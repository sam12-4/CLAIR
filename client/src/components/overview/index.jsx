import React from 'react';
import { Grid, Paper, Typography, useTheme } from '@mui/material';
import {
  People as PeopleIcon,
  Home as HomeIcon,
  Videocam as VideocamIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatCard = ({ title, value, icon: Icon, change }) => {
  const theme = useTheme();
  return (
    <Paper elevation={3} style={{ padding: 16, display: 'flex', alignItems: 'center' }}>
      <Icon style={{ fontSize: 40, color: theme.palette.primary.main, marginRight: 16 }} />
      <div>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          style={{ color: change >= 0 ? theme.palette.success.main : theme.palette.error.main }}
        >
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
        </Typography>
      </div>
    </Paper>
  );
};

export function Overview (){
  const theme = useTheme();

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: theme.palette.primary.main,
      },
    ],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Customers',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: theme.palette.secondary.main,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Customers" value="1,234" icon={PeopleIcon} change={5.6} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Active Properties" value="789" icon={HomeIcon} change={-2.3} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Cameras Online" value="456" icon={VideocamIcon} change={1.8} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Scheduled Cleanings" value="56" icon={CalendarIcon} change={12.5} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: 16, height: '300px' }}>
          <Typography variant="h6" gutterBottom>
            Revenue Overview
          </Typography>
          <Bar data={barChartData} options={chartOptions} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: 16, height: '300px' }}>
          <Typography variant="h6" gutterBottom>
            Customer Growth
          </Typography>
          <Line data={lineChartData} options={chartOptions} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          <ActivityFeed />
        </Paper>
      </Grid>
    </Grid>
  );
};

const ActivityFeed = () => (
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {[
      { action: 'New customer signed up', time: '2 minutes ago' },
      { action: 'Cleaning completed at 123 Main St', time: '1 hour ago' },
      { action: 'Camera offline at 456 Elm St', time: '3 hours ago' },
      { action: 'New cleaning scheduled for tomorrow', time: '5 hours ago' },
    ].map((activity, index) => (
      <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#1976d2',
            marginRight: 10,
          }}
        />
        <div>
          <Typography variant="body1">{activity.action}</Typography>
          <Typography variant="body2" color="textSecondary">
            {activity.time}
          </Typography>
        </div>
      </li>
    ))}
  </ul>
);

