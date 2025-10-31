'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@workly/shared-ui';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { TrendingUp } from 'lucide-react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function TaskStatusChart() {
  const statuses = [
    { label: 'Tamamlandı', count: 156, color: '#22c55e' },
    { label: 'Devam Eden', count: 64, color: '#3b82f6' },
    { label: 'Beklemede', count: 28, color: '#eab308' },
    { label: 'İptal', count: 12, color: '#ef4444' },
  ];

  const totalTasks = statuses.reduce((sum, status) => sum + status.count, 0);

  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
      height: 380,
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
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 5,
          size: '35%',
          background: 'transparent',
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            color: '#6b7280',
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: '32px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            color: '#111827',
            offsetY: 5,
            formatter: function () {
              return totalTasks.toString();
            }
          },
          total: {
            show: true,
            label: 'Toplam Görev',
            fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            color: '#9ca3af',
            formatter: function () {
              return totalTasks.toString();
            }
          }
        },
        track: {
          background: '#f3f4f6',
          strokeWidth: '100%',
          margin: 8,
        }
      }
    },
    colors: statuses.map(s => s.color),
    labels: statuses.map(s => s.label),
    stroke: {
      lineCap: 'round'
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '13px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      labels: {
        colors: '#6b7280',
      },
      markers: {
        size: 12,
        offsetX: -4,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 6,
      },
      formatter: (seriesName, opts) => {
        const count = statuses[opts.seriesIndex].count;
        return `${seriesName}: ${count}`;
      }
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      y: {
        formatter: (value, { seriesIndex }) => {
          return `${statuses[seriesIndex].count} görev (${value.toFixed(0)}%)`;
        }
      }
    }
  };

  const series = statuses.map(s => (s.count / totalTasks) * 100);

  return (
    <Card variant="default" className="h-full flex flex-col border border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Görev Durumu</span>
          <div className="flex items-center gap-1.5 text-sm font-normal text-gray-500">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span>{totalTasks} Görev</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center">
        <Chart options={options} series={series} type="radialBar" height={380} />
      </CardContent>
    </Card>
  );
}

