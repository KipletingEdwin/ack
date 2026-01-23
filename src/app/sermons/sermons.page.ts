import { Component, OnInit } from '@angular/core';

interface Sermon {
  id: number;
  title: string;
  speaker: string;
  speakerTitle?: string;
  date: Date;
  description: string;
  scripture?: string;
  series?: string;
  duration: number;
  thumbnail?: string;
  videoUrl?: string;
  audioUrl?: string;
  views?: number;
}

interface SermonSeries {
  id: number;
  name: string;
  description: string;
  speaker: string;
  startDate: Date;
  sermonCount: number;
  image?: string;
}

interface Topic {
  name: string;
  icon: string;
  count: number;
}

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
  standalone: false,
})
export class SermonsPage implements OnInit {

  searchTerm: string = '';
  selectedFilter: string = 'all';
  sortBy: string = 'newest';
  
  hasMoreSermons: boolean = true;
  displayCount: number = 12;


  // Featured Sermon
  featuredSermon: Sermon = {
    id: 1,
    title: 'Walking in Faith',
    speaker: 'Rev. John Doe',
    speakerTitle: 'Senior Pastor',
    date: new Date('2026-01-19'),
    description: 'Discover what it truly means to walk by faith and not by sight. Learn how to trust God completely even when circumstances seem impossible.',
    scripture: 'Hebrews 11:1-6',
    series: 'Walking in Faith Series',
    duration: 45,
    //thumbnail: 'assets/sermons/walking-in-faith.jpg',
    views: 1250
  };

  // All Sermons
  allSermons: Sermon[] = [
    {
      id: 1,
      title: 'Walking in Faith',
      speaker: 'Rev. John Doe',
      speakerTitle: 'Senior Pastor',
      date: new Date('2026-01-19'),
      description: 'Discover what it truly means to walk by faith and not by sight.',
      scripture: 'Hebrews 11:1-6',
      series: 'Walking in Faith Series',
      duration: 45,
      //thumbnail: 'assets/sermons/walking-in-faith.jpg',
      views: 1250
    },
    {
      id: 2,
      title: 'The Power of Prayer',
      speaker: 'Rev. John Doe',
      date: new Date('2026-01-12'),
      description: 'Understanding the transformative power of prayer in our daily lives.',
      scripture: 'Matthew 6:5-15',
      series: 'Walking in Faith Series',
      duration: 38,
      //thumbnail: 'assets/sermons/power-of-prayer.jpg',
      views: 980
    },
    {
      id: 3,
      title: 'Living with Purpose',
      speaker: 'Pastor Mary Wanjiku',
      speakerTitle: 'Assistant Pastor',
      date: new Date('2026-01-05'),
      description: 'Discover God\'s unique purpose for your life and how to walk in it.',
      scripture: 'Jeremiah 29:11',
      duration: 42,
      //thumbnail: 'assets/sermons/living-with-purpose.jpg',
      views: 1120
    },
    {
      id: 4,
      title: 'Overcoming Fear',
      speaker: 'Rev. John Doe',
      date: new Date('2025-12-29'),
      description: 'Learning to overcome fear through faith and trust in God.',
      scripture: '2 Timothy 1:7',
      series: 'Walking in Faith Series',
      duration: 40,
      //thumbnail: 'assets/sermons/overcoming-fear.jpg',
      views: 850
    },
    {
      id: 5,
      title: 'The Gift of Grace',
      speaker: 'Pastor Mary Wanjiku',
      date: new Date('2025-12-22'),
      description: 'Exploring the depth of God\'s grace and its impact on our salvation.',
      scripture: 'Ephesians 2:8-9',
      duration: 35,
      //thumbnail: 'assets/sermons/gift-of-grace.jpg',
      views: 920
    },
    {
      id: 6,
      title: 'Building Strong Families',
      speaker: 'Rev. John Doe',
      date: new Date('2025-12-15'),
      description: 'Biblical principles for building and maintaining strong Christian families.',
      scripture: 'Ephesians 5:21-33',
      series: 'Family Foundations',
      duration: 48,
      //thumbnail: 'assets/sermons/strong-families.jpg',
      views: 1050
    },
    {
      id: 7,
      title: 'The Joy of Giving',
      speaker: 'Pastor Mary Wanjiku',
      date: new Date('2025-12-08'),
      description: 'Understanding biblical generosity and the blessings of cheerful giving.',
      scripture: '2 Corinthians 9:6-8',
      duration: 36,
      //thumbnail: 'assets/sermons/joy-of-giving.jpg',
      views: 780
    },
    {
      id: 8,
      title: 'Finding Peace in Chaos',
      speaker: 'Rev. John Doe',
      date: new Date('2025-12-01'),
      description: 'How to find God\'s peace even in the midst of life\'s storms.',
      scripture: 'Philippians 4:6-7',
      duration: 41,
      //thumbnail: 'assets/sermons/finding-peace.jpg',
      views: 1180
    },
    {
      id: 9,
      title: 'The Great Commission',
      speaker: 'Pastor Mary Wanjiku',
      date: new Date('2025-11-24'),
      description: 'Our calling to share the Gospel and make disciples of all nations.',
      scripture: 'Matthew 28:18-20',
      series: 'Mission Minded',
      duration: 39,
      //thumbnail: 'assets/sermons/great-commission.jpg',
      views: 890
    },
    {
      id: 10,
      title: 'Love One Another',
      speaker: 'Rev. John Doe',
      date: new Date('2025-11-17'),
      description: 'The commandment to love and its practical application in our lives.',
      scripture: 'John 13:34-35',
      duration: 37,
      //thumbnail: 'assets/sermons/love-one-another.jpg',
      views: 950
    },
    {
      id: 11,
      title: 'Faith in Action',
      speaker: 'Pastor Mary Wanjiku',
      date: new Date('2025-11-10'),
      description: 'How genuine faith manifests itself through our actions and service.',
      scripture: 'James 2:14-26',
      series: 'Walking in Faith Series',
      duration: 43,
      //thumbnail: 'assets/sermons/faith-in-action.jpg',
      views: 1020
    },
    {
      id: 12,
      title: 'The Armor of God',
      speaker: 'Rev. John Doe',
      date: new Date('2025-11-03'),
      description: 'Equipping ourselves with God\'s armor for spiritual warfare.',
      scripture: 'Ephesians 6:10-18',
      duration: 46,
      //thumbnail: 'assets/sermons/armor-of-god.jpg',
      views: 1340
    }
  ];

  filteredSermons: Sermon[] = [];

  // Sermon Series
  sermonSeries: SermonSeries[] = [
    {
      id: 1,
      name: 'Walking in Faith',
      description: 'A journey through biblical faith and its practical application in modern life.',
      speaker: 'Rev. John Doe',
      startDate: new Date('2025-11-03'),
      sermonCount: 5,
      //image: 'assets/series/walking-in-faith.jpg'
    },
    {
      id: 2,
      name: 'Family Foundations',
      description: 'Building strong, Christ-centered families in today\'s world.',
      speaker: 'Rev. John Doe',
      startDate: new Date('2025-12-15'),
      sermonCount: 4,
      //image: 'assets/series/family-foundations.jpg'
    },
    {
      id: 3,
      name: 'Mission Minded',
      description: 'Understanding and embracing our calling to spread the Gospel.',
      speaker: 'Pastor Mary Wanjiku',
      startDate: new Date('2025-11-24'),
      sermonCount: 3,
      //image: 'assets/series/mission-minded.jpg'
    }
  ];

  // Topics
  topics: Topic[] = [
    { name: 'Faith', icon: 'hand-right-outline', count: 24 },
    { name: 'Prayer', icon: 'flame-outline', count: 18 },
    { name: 'Family', icon: 'home-outline', count: 15 },
    { name: 'Worship', icon: 'musical-notes-outline', count: 12 },
    { name: 'Love', icon: 'heart-outline', count: 20 },
    { name: 'Service', icon: 'people-outline', count: 16 },
    { name: 'Salvation', icon: 'shield-outline', count: 14 },
    { name: 'Hope', icon: 'sunny-outline', count: 11 }
  ];

  constructor() { }

  ngOnInit() {
    this.filteredSermons = [...this.allSermons];
  }

  getSectionTitle(): string {
    switch (this.selectedFilter) {
      case 'series':
        return 'Sermon Series';
      case 'speaker':
        return 'By Speaker';
      case 'topic':
        return 'By Topic';
      default:
        return 'All Sermons';
    }
  }

  filterSermons() {
    let filtered = [...this.allSermons];

    // Filter by search term
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(sermon => 
        sermon.title.toLowerCase().includes(term) ||
        sermon.speaker.toLowerCase().includes(term) ||
        sermon.description.toLowerCase().includes(term) ||
        (sermon.scripture && sermon.scripture.toLowerCase().includes(term)) ||
        (sermon.series && sermon.series.toLowerCase().includes(term))
      );
    }

    // Filter by category
    if (this.selectedFilter === 'series') {
      filtered = filtered.filter(sermon => sermon.series);
    }

    this.filteredSermons = filtered;
    this.sortSermons();
  }

  sortSermons() {
    switch (this.sortBy) {
      case 'newest':
        this.filteredSermons.sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      case 'oldest':
        this.filteredSermons.sort((a, b) => a.date.getTime() - b.date.getTime());
        break;
      case 'popular':
        this.filteredSermons.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'title':
        this.filteredSermons.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedFilter = 'all';
    this.sortBy = 'newest';
    this.filterSermons();
  }

  filterByTopic(topic: Topic) {
    this.searchTerm = topic.name;
    this.selectedFilter = 'topic';
    this.filterSermons();
  }

  playSermon(sermon: Sermon) {
    console.log('Playing sermon:', sermon.title);
    // Implement video player modal or navigation
    // Example: this.navCtrl.navigateForward(`/sermon-player/${sermon.id}`);
  }

  downloadSermon(event: Event, sermon: Sermon) {
    event.stopPropagation();
    console.log('Downloading sermon:', sermon.title);
    // Implement download logic
    alert('Download feature coming soon!');
  }

  shareSermon(event: Event, sermon: Sermon) {
    event.stopPropagation();
    console.log('Sharing sermon:', sermon.title);
    
    if (navigator.share) {
      navigator.share({
        title: sermon.title,
        text: sermon.description,
        url: window.location.href + '/' + sermon.id
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Share: ' + sermon.title);
    }
  }

  loadMoreSermons() {
    this.displayCount += 12;
    // In a real app, you'd load more from an API
    if (this.displayCount >= this.allSermons.length) {
      this.hasMoreSermons = false;
    }
  }

  isNew(date: Date): boolean {
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    return date > twoWeeksAgo;
  }




}
