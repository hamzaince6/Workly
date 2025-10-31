import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a [href]="href" [class]="'flex items-center gap-2 ' + className">
      <!-- Logo Icon -->
      <div class="relative">
        <div
          [ngClass]="[
            'bg-gradient-to-br from-teal-600 via-teal-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden',
            sizeClasses[size].container
          ]"
        >
          <!-- W Icon -->
          <svg
            viewBox="0 0 24 24"
            fill="none"
            [ngClass]="[sizeClasses[size].text, 'text-white relative z-10']"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4L6 18L9 8L12 18L15 8L18 18L21 4"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <!-- Corner Accents -->
          <div
            class="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-bl-lg opacity-50"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-3 h-3 bg-teal-700 rounded-tr-lg opacity-50"
          ></div>
        </div>
      </div>

      <!-- Text -->
      <div *ngIf="showText" class="flex flex-col">
      <span [ngClass]="[sizeClasses[size].textSize, 'font-bold text-teal-600 leading-none']">
        Workly
      </span>
        <span *ngIf="size === 'lg'" class="text-xs text-gray-500 font-medium mt-0.5">
          İşletme Yönetimi
        </span>
      </div>
    </a>
  `,
  styles: []
})
export class LogoComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() showText: boolean = true;
  @Input() className: string = '';
  @Input() href: string = '/';

  sizeClasses = {
    sm: {
      container: 'w-8 h-8',
      text: 'w-4 h-4',
      textSize: 'text-base',
    },
    md: {
      container: 'w-10 h-10',
      text: 'w-5 h-5',
      textSize: 'text-2xl',
    },
    lg: {
      container: 'w-16 h-16',
      text: 'w-8 h-8',
      textSize: 'text-4xl',
    },
  };
}

