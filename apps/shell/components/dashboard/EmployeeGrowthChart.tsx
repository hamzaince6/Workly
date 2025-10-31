'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@workly/shared-ui';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function EmployeeGrowthChart() {
  const data = [180, 195, 205, 215, 220, 228, 235, 240, 242, 245, 246, 248];
  
  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 300,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#0d9488'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: '#0d9488',
            opacity: 0.6
          },
          {
            offset: 100,
            color: '#22c55e',
            opacity: 0.1
          }
        ]
      }
    },
    xaxis: {
      categories: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      labels: {
        style: {
          colors: '#6b7280',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#6b7280',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        },
        formatter: (value) => Math.round(value).toString(),
      },
    },
    grid: {
      borderColor: '#f3f4f6',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false,
        }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10,
      }
    },
    tooltip: {
      theme: 'light',
      x: {
        show: true,
      },
      y: {
        formatter: (value) => `${value} çalışan`,
        title: {
          formatter: () => '',
        }
      },
      marker: {
        show: true,
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 6,
        sizeOffset: 3,
      }
    },
  };

  const series = [
    {
      name: 'Çalışan Sayısı',
      data: data,
    },
  ];

  return (
    <Card variant="default" className="border border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Çalışan Büyümesi</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-normal text-gray-500">Son 12 Ay</span>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-green-600">+68</span>
              <span className="text-xs text-gray-500">(+37.8%)</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Chart options={options} series={series} type="area" height={300} />
      </CardContent>
    </Card>
  );
}

