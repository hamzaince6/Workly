'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@workly/shared-ui';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function DepartmentChart() {
  const departments = [
    { name: 'Mühendislik', count: 85, color: '#0d9488' },
    { name: 'Satış', count: 62, color: '#22c55e' },
    { name: 'Pazarlama', count: 45, color: '#3b82f6' },
    { name: 'İK', count: 28, color: '#a855f7' },
    { name: 'Finans', count: 28, color: '#f97316' },
  ];

  const totalEmployees = departments.reduce((sum, dept) => sum + dept.count, 0);

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        horizontal: false,
        columnWidth: '70%',
        distributed: true,
        dataLabels: {
          position: 'top',
        }
      }
    },
    colors: departments.map(d => d.color),
    dataLabels: {
      enabled: true,
      offsetY: -25,
      style: {
        fontSize: '13px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        colors: ['#111827']
      },
      formatter: (val: number) => `${val}`,
    },
    xaxis: {
      categories: departments.map(d => d.name),
      labels: {
        style: {
          fontSize: '13px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          colors: departments.map(d => d.color),
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '13px',
          fontFamily: 'Inter, sans-serif',
          colors: '#6b7280',
        },
        formatter: (val) => val.toFixed(0),
      },
      title: {
        text: 'Çalışan Sayısı',
        style: {
          fontSize: '13px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          color: '#6b7280',
        }
      }
    },
    grid: {
      borderColor: '#f3f4f6',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 10
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (value) => `${value} çalışan`,
        title: {
          formatter: () => ''
        }
      },
      x: {
        show: true,
      }
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
        }
      },
      active: {
        filter: {
          type: 'darken',
        }
      }
    }
  };

  const series = [{
    name: 'Çalışan Sayısı',
    data: departments.map(d => d.count)
  }];

  return (
    <Card variant="default" className="border border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Departman Dağılımı</span>
          <span className="text-sm font-normal text-gray-500">{totalEmployees} Çalışan</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Chart options={options} series={series} type="bar" height={350} />
      </CardContent>
    </Card>
  );
}

