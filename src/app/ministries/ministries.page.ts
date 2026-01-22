import { Component, OnInit } from '@angular/core';

interface Ministry {
  name: string;
  icon: string;
  description: string;
  leader?: string;
  schedule?: string;
  members?: number;
  color?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
  standalone: false,
})
export class MinistriesPage implements OnInit {

  ministries: Ministry[] = [
    {
      name: 'Youth Ministry',
      icon: 'people-outline',
      description: 'Empowering young people to grow in faith and leadership through dynamic worship, mentorship, and community service.',
      leader: 'Pastor Mary Wanjiku',
      schedule: 'Saturdays, 3:00 PM',
      members: 85,
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      featured: true
    },
    {
      name: 'Women\'s Guild',
      icon: 'flower-outline',
      description: 'A fellowship of women dedicated to prayer, service, and community support. Building godly women who make a difference.',
      leader: 'Mrs. Ruth Njeri',
      schedule: 'Thursdays, 2:00 PM',
      members: 120,
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Men\'s Fellowship',
      icon: 'shield-outline',
      description: 'Building strong men of faith through fellowship, discipleship, and service. Standing firm in God\'s word.',
      leader: 'Mr. James Mwangi',
      schedule: 'Saturdays, 6:00 AM',
      members: 95,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: 'Sunday School',
      icon: 'school-outline',
      description: 'Teaching children the foundations of Christian faith in a fun, engaging way. Nurturing the next generation of believers.',
      leader: 'Miss Alice Wambui',
      schedule: 'Sundays, 9:00 AM',
      members: 150,
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      featured: true
    },
    {
      name: 'Choir Ministry',
      icon: 'musical-notes-outline',
      description: 'Leading the congregation in worship through music and praise. Lifting hearts and voices to glorify God.',
      leader: 'Mr. Simon Omondi',
      schedule: 'Wednesdays, 6:00 PM',
      members: 45,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      name: 'Intercessory Prayer',
      icon: 'flame-outline',
      description: 'Standing in the gap through powerful prayer and intercession. Seeking God\'s face for our church and nation.',
      leader: 'Rev. John Doe',
      schedule: 'Daily, 5:00 AM',
      members: 60,
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      name: 'Hospitality Team',
      icon: 'cafe-outline',
      description: 'Welcoming visitors and members with warmth and love. Creating a home away from home for all who enter.',
      leader: 'Mrs. Jane Chebet',
      schedule: 'Sundays, 8:00 AM',
      members: 35,
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      name: 'Missions & Outreach',
      icon: 'globe-outline',
      description: 'Reaching beyond our walls to share the Gospel locally and globally. Making disciples of all nations.',
      leader: 'Mr. Peter Kiptoo',
      schedule: 'Monthly Projects',
      members: 50,
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      name: 'Media & Technology',
      icon: 'videocam-outline',
      description: 'Using technology to spread the Gospel and enhance worship. Livestreaming services and creating digital content.',
      leader: 'Mr. Brian Ochieng',
      schedule: 'Sundays & Events',
      members: 20,
      color: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    },
    {
      name: 'Marriage & Family',
      icon: 'heart-outline',
      description: 'Strengthening marriages and families through biblical teaching, counseling, and support.',
      leader: 'Rev. & Mrs. Kamau',
      schedule: '2nd Sunday, 1:00 PM',
      members: 75,
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      name: 'Ushering Ministry',
      icon: 'hand-right-outline',
      description: 'Serving with excellence to create an orderly and welcoming worship environment for all.',
      leader: 'Mr. Daniel Mutua',
      schedule: 'Sundays, 8:00 AM',
      members: 40,
      color: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
    },
    {
      name: 'Counseling Ministry',
      icon: 'chatbubbles-outline',
      description: 'Providing pastoral care, guidance, and support to those facing life\'s challenges.',
      leader: 'Pastor Mary Wanjiku',
      schedule: 'By Appointment',
      members: 15,
      color: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)'
    }
  ];

  constructor() { }

  ngOnInit() {
    // You can add any initialization logic here
    // For example, fetching ministries from a service
  }

  // Optional: Method to filter or search ministries
  filterMinistries(category: string) {
    // Implementation for filtering
  }

  // Optional: Method to navigate to ministry details
  viewMinistryDetails(ministry: Ministry) {
    // Navigate to detail page
    console.log('Viewing details for:', ministry.name);
  }

}