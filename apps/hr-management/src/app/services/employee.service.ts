import { Injectable, signal } from '@angular/core';
import { Employee, Department, EmployeeStatus } from '@workly/shared-types';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSignal = signal<Employee[]>(this.getMockEmployees());
  
  employees = this.employeesSignal.asReadonly();

  getEmployees(): Employee[] {
    return this.employeesSignal();
  }

  getEmployeeById(id: string): Employee | undefined {
    return this.employeesSignal().find(emp => emp.id === id);
  }

  addEmployee(employee: Omit<Employee, 'id'>): Employee {
    const newEmployee: Employee = {
      ...employee,
      id: `emp-${Date.now()}`
    };
    this.employeesSignal.update(employees => [...employees, newEmployee]);
    return newEmployee;
  }

  updateEmployee(id: string, updates: Partial<Employee>): void {
    this.employeesSignal.update(employees =>
      employees.map(emp => emp.id === id ? { ...emp, ...updates } : emp)
    );
  }

  deleteEmployee(id: string): void {
    this.employeesSignal.update(employees =>
      employees.filter(emp => emp.id !== id)
    );
  }

  private getMockEmployees(): Employee[] {
    return [
      {
        id: 'emp-1',
        firstName: 'Ahmet',
        lastName: 'Yılmaz',
        email: 'ahmet.yilmaz@workly.com',
        phone: '+90 (532) 123-4567',
        position: 'Kıdemli Yazılım Geliştirici',
        department: Department.ENGINEERING,
        startDate: '2022-01-15',
        salary: 85000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=12',
        skills: ['TypeScript', 'Angular', 'React', 'Node.js', 'MongoDB'],
        performanceScore: 4.5
      },
      {
        id: 'emp-2',
        firstName: 'Ayşe',
        lastName: 'Demir',
        email: 'ayse.demir@workly.com',
        phone: '+90 (533) 234-5678',
        position: 'İnsan Kaynakları Müdürü',
        department: Department.HR,
        startDate: '2021-06-01',
        salary: 72000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=5',
        skills: ['İşe Alım', 'Çalışan İlişkileri', 'Performans Yönetimi', 'İK Planlaması'],
        performanceScore: 4.8
      },
      {
        id: 'emp-3',
        firstName: 'Mehmet',
        lastName: 'Kaya',
        email: 'mehmet.kaya@workly.com',
        phone: '+90 (534) 345-6789',
        position: 'Dijital Pazarlama Uzmanı',
        department: Department.MARKETING,
        startDate: '2023-03-10',
        salary: 58000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=8',
        skills: ['Dijital Pazarlama', 'SEO', 'Google Ads', 'Sosyal Medya Yönetimi'],
        performanceScore: 4.2
      },
      {
        id: 'emp-4',
        firstName: 'Zeynep',
        lastName: 'Aydın',
        email: 'zeynep.aydin@workly.com',
        phone: '+90 (535) 456-7890',
        position: 'Satış Direktörü',
        department: Department.SALES,
        startDate: '2020-09-01',
        salary: 95000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=1',
        skills: ['Satış Stratejisi', 'Müzakere', 'CRM', 'Ekip Yönetimi'],
        performanceScore: 4.9
      },
      {
        id: 'emp-5',
        firstName: 'Can',
        lastName: 'Öztürk',
        email: 'can.ozturk@workly.com',
        phone: '+90 (536) 567-8901',
        position: 'Finans Analisti',
        department: Department.FINANCE,
        startDate: '2022-11-15',
        salary: 65000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=3',
        skills: ['Finansal Modelleme', 'Bütçe Analizi', 'Excel', 'Power BI'],
        performanceScore: 4.3
      },
      {
        id: 'emp-6',
        firstName: 'Elif',
        lastName: 'Çelik',
        email: 'elif.celik@workly.com',
        phone: '+90 (537) 678-9012',
        position: 'Ürün Müdürü',
        department: Department.OPERATIONS,
        startDate: '2021-04-20',
        salary: 78000,
        status: EmployeeStatus.ON_LEAVE,
        avatar: 'https://i.pravatar.cc/150?img=9',
        skills: ['Ürün Stratejisi', 'Agile', 'Kullanıcı Araştırması', 'Scrum'],
        performanceScore: 4.6
      },
      {
        id: 'emp-7',
        firstName: 'Burak',
        lastName: 'Yıldız',
        email: 'burak.yildiz@workly.com',
        phone: '+90 (538) 789-0123',
        position: 'IT Destek Uzmanı',
        department: Department.IT,
        startDate: '2023-01-10',
        salary: 52000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=13',
        skills: ['Ağ Yönetimi', 'Donanım Desteği', 'Windows Server', 'Help Desk'],
        performanceScore: 4.0
      },
      {
        id: 'emp-8',
        firstName: 'Selin',
        lastName: 'Aksoy',
        email: 'selin.aksoy@workly.com',
        phone: '+90 (539) 890-1234',
        position: 'Müşteri Başarı Müdürü',
        department: Department.CUSTOMER_SERVICE,
        startDate: '2022-08-01',
        salary: 68000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=10',
        skills: ['Müşteri İlişkileri', 'CRM Yazılımları', 'Ekip Yönetimi', 'Çözüm Odaklılık'],
        performanceScore: 4.7
      },
      {
        id: 'emp-9',
        firstName: 'Emre',
        lastName: 'Şahin',
        email: 'emre.sahin@workly.com',
        phone: '+90 (530) 111-2233',
        position: 'Frontend Developer',
        department: Department.ENGINEERING,
        startDate: '2023-05-15',
        salary: 62000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=15',
        skills: ['React', 'Vue.js', 'CSS', 'Responsive Design', 'UI/UX'],
        performanceScore: 4.4
      },
      {
        id: 'emp-10',
        firstName: 'Deniz',
        lastName: 'Koç',
        email: 'deniz.koc@workly.com',
        phone: '+90 (531) 222-3344',
        position: 'İçerik Pazarlama Müdürü',
        department: Department.MARKETING,
        startDate: '2021-11-20',
        salary: 68000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=20',
        skills: ['İçerik Stratejisi', 'Copywriting', 'Blog Yönetimi', 'Email Marketing'],
        performanceScore: 4.6
      },
      {
        id: 'emp-11',
        firstName: 'Özge',
        lastName: 'Arslan',
        email: 'ozge.arslan@workly.com',
        phone: '+90 (532) 333-4455',
        position: 'Satış Temsilcisi',
        department: Department.SALES,
        startDate: '2023-08-01',
        salary: 48000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=25',
        skills: ['Müşteri İletişimi', 'Satış Teknikleri', 'Ürün Bilgisi', 'Raporlama'],
        performanceScore: 3.9
      },
      {
        id: 'emp-12',
        firstName: 'Kaan',
        lastName: 'Toprak',
        email: 'kaan.toprak@workly.com',
        phone: '+90 (533) 444-5566',
        position: 'DevOps Mühendisi',
        department: Department.IT,
        startDate: '2022-03-15',
        salary: 82000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=30',
        skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
        performanceScore: 4.8
      },
      {
        id: 'emp-13',
        firstName: 'Derya',
        lastName: 'Güneş',
        email: 'derya.gunes@workly.com',
        phone: '+90 (534) 555-6677',
        position: 'Muhasebe Müdürü',
        department: Department.FINANCE,
        startDate: '2020-05-10',
        salary: 75000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=35',
        skills: ['Genel Muhasebe', 'Maliyet Analizi', 'Vergi', 'SAP'],
        performanceScore: 4.5
      },
      {
        id: 'emp-14',
        firstName: 'Barış',
        lastName: 'Taş',
        email: 'baris.tas@workly.com',
        phone: '+90 (535) 666-7788',
        position: 'UX/UI Tasarımcı',
        department: Department.OPERATIONS,
        startDate: '2023-02-01',
        salary: 64000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=40',
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing', 'Wireframing'],
        performanceScore: 4.3
      },
      {
        id: 'emp-15',
        firstName: 'Gamze',
        lastName: 'Kurt',
        email: 'gamze.kurt@workly.com',
        phone: '+90 (536) 777-8899',
        position: 'İK Uzmanı',
        department: Department.HR,
        startDate: '2023-07-15',
        salary: 52000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=45',
        skills: ['İşe Alım', 'Eğitim ve Gelişim', 'Bordro', 'İş Hukuku'],
        performanceScore: 4.1
      },
      {
        id: 'emp-16',
        firstName: 'Cem',
        lastName: 'Yavuz',
        email: 'cem.yavuz@workly.com',
        phone: '+90 (537) 888-9900',
        position: 'Backend Developer',
        department: Department.ENGINEERING,
        startDate: '2022-09-20',
        salary: 72000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=50',
        skills: ['Python', 'Django', 'PostgreSQL', 'REST API', 'Microservices'],
        performanceScore: 4.6
      },
      {
        id: 'emp-17',
        firstName: 'Merve',
        lastName: 'Polat',
        email: 'merve.polat@workly.com',
        phone: '+90 (538) 999-0011',
        position: 'Sosyal Medya Yöneticisi',
        department: Department.MARKETING,
        startDate: '2023-04-01',
        salary: 54000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=27',
        skills: ['Instagram', 'TikTok', 'LinkedIn', 'İçerik Planlama', 'Analitik'],
        performanceScore: 4.2
      },
      {
        id: 'emp-18',
        firstName: 'Tolga',
        lastName: 'Erdoğan',
        email: 'tolga.erdogan@workly.com',
        phone: '+90 (539) 000-1122',
        position: 'Müşteri Destek Uzmanı',
        department: Department.CUSTOMER_SERVICE,
        startDate: '2023-09-01',
        salary: 45000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=33',
        skills: ['Müşteri Hizmetleri', 'Problem Çözme', 'Zendesk', 'İletişim Becerileri'],
        performanceScore: 3.8
      }
    ];
  }
}

