export type Language = 'el' | 'en';

export const translations = {
  el: {
    hero: {
      title: "Βρείτε Parking σε Πραγματικό Χρόνο στον Δρόμο",
      appStore: "App Store",
      googlePlay: "Google Play"
    },
    sections: {
      howItWorks: "Πώς Λειτουργεί",
      interactiveMap: "Διαδραστικός Χάρτης",
      features: "Βασικά Χαρακτηριστικά",
      pointsRewards: "Πόντοι & Ανταμοιβές",
      notifications: "Ειδοποιήσεις",
      settings: "Ρυθμίσεις",
      support: "Υποστήριξη"
    },
    map: {
      title: "Διαθεσιμότητα σε Πραγματικό Χρόνο",
      description: "Ο διαδραστικός χάρτης εμφανίζει διαθέσιμες θέσεις με χρωματικούς δείκτες:",
      smallSpots: "Μικρές θέσεις",
      mediumSpots: "Μεσαίες θέσεις",
      largeSpots: "Μεγάλες θέσεις"
    },
    points: {
      title: "Κερδίστε Ενώ Σταθμεύετε",
      description: "Μοιραστείτε τη θέση σας όταν φεύγετε και κερδίστε πόντους για δωρεάν κρατήσεις. Παρακολουθήστε την παγκόσμια κατάταξή σας.",
      pointPerRelease: "1 πόντος ανά απελευθέρωση θέσης",
      freeReservation: "Δωρεάν κράτηση κάθε 30 πόντους",
      globalRanking: "Παγκόσμια κατάταξη"
    },
    notifications: {
      title: "Μείνετε Ενημερωμένοι",
      description: "Λάβετε άμεσες ειδοποιήσεις για νέες θέσεις και πλοηγηθείτε απευθείας από τις ειδοποιήσεις.",
      instantAlerts: "Άμεσες ειδοποιήσεις διαθεσιμότητας",
      oneTapNav: "Πλοήγηση με ένα πάτημα",
      customPrefs: "Προσαρμοσμένες προτιμήσεις"
    },
    settings: {
      title: "Προσαρμόστε την Εμπειρία σας",
      description: "Προσαρμόστε τις ρυθμίσεις της εφαρμογής και παρακολουθήστε το ιστορικό στάθμευσης με λεπτομερή στατιστικά.",
      language: "Προτιμήσεις γλώσσας",
      notifications: "Διαχείριση ειδοποιήσεων",
      history: "Ιστορικό & στατιστικά"
    },
    support: {
      title: "Συχνές Ερωτήσεις",
      howToEarn: "Πώς κερδίζω πόντους;",
      earnAnswer: "Μοιραστείτε τη θέση σας όταν φεύγετε και κερδίστε +1 πόντο για κάθε επιβεβαιωμένη απελευθέρωση.",
      premiumBenefits: "Ποια είναι τα οφέλη του Premium;",
      premiumAnswer: "Λάβετε προτεραιότητα στις ειδοποιήσεις, προηγμένα φίλτρα και λεπτομερή στατιστικά με το Premium.",
      contactSupport: "Πώς επικοινωνώ με την υποστήριξη;",
      contactAnswer: "Στείλτε μας email στο support@t-parking.gr ή χρησιμοποιήστε τη συνομιλία στην εφαρμογή για άμεση βοήθεια."
    },
    footer: {
      quickLinks: "Γρήγοροι Σύνδεσμοι",
      legal: "Νομικά",
      contact: "Επικοινωνία",
      rights: "© 2024 T-Parking. Με επιφύλαξη παντός δικαιώματος.",
      home: "Αρχική",
      features: "Χαρακτηριστικά",
      plans: "Σχέδια",
      support: "Υποστήριξη",
      terms: "Όροι Χρήσης",
      privacy: "Πολιτική Απορρήτου",
      cookies: "Cookies",
      email: "Email: support@t-parking.gr",
      phone: "Τηλέφωνο: +30 210 1234567"
    },
    features: {
      liveMap: {
        title: "Ζωντανός Χάρτης",
        description: "Δείτε διαθέσιμες θέσεις σε πραγματικό χρόνο με ενημερώσεις κάθε λεπτό"
      },
      instantReservations: {
        title: "Άμεσες Κρατήσεις",
        description: "Κρατήστε τη θέση σας με ένα πάτημα και πάρτε άμεση επιβεβαίωση"
      },
      shareEarn: {
        title: "Μοιραστείτε & Κερδίστε",
        description: "Κερδίστε πόντους όταν μοιράζεστε τη θέση σας με άλλους οδηγούς"
      },
      pointsSystem: {
        title: "Σύστημα Πόντων",
        description: "Συλλέξτε πόντους για δωρεάν κρατήσεις και προνομίες"
      },
      realTimeUpdates: {
        title: "Ενημερώσεις σε Πραγματικό Χρόνο",
        description: "Λάβετε άμεσες ειδοποιήσεις για νέες θέσεις και αλλαγές διαθεσιμότητας"
      },
      communityDriven: {
        title: "Κοινότητα",
        description: "Μέρος μιας μεγάλης κοινότητας οδηγών που βοηθούν ο ένας τον άλλο"
      }
    },
    steps: {
      openApp: {
        title: {
          el: 'Ανοίξτε την Εφαρμογή',
          en: 'Open the App',
        },
        description: {
          el: 'Κατεβάστε <span class="font-bold text-black">Δωρεάν</span> την εφαρμογή και δημιουργήστε λογαριασμό',
          en: 'Download the app for <span class="font-bold text-black">free</span> and create an account',
        },
      },
      findSpot: {
        title: {
          el: 'Βρείτε Θέση',
          en: 'Find a Spot',
        },
        description: {
          el: 'Χρησιμοποιήστε τον χάρτη για να βρείτε διαθέσιμες θέσεις κοντά σας',
          en: 'Use the map to find available spots near you',
        },
      },
      reserveOrShare: {
        title: {
          el: 'Κρατήστε ή Μοιραστείτε',
          en: 'Reserve or Share',
        },
        description: {
          el: 'Κλείστε μια θέση με ένα πάτημα ή μοιραστείτε τη δική σας όταν αποχωρείτε , κερδίζοντας πόντους κάθε φορά.',
          en: 'Book a spot with one tap or share your own when leaving, earning points every time.',
        },
      },
    },
    smartSection: {
      title: 'Smart Parking Solution',
      elTitle: 'Η Έξυπνη Λύση για το Parking στην Πόλη',
      el: [
        'Η εφαρμογή προσφέρει άμεση πρόσβαση σε διαθέσιμες θέσεις στάθμευσης στον δρόμο, σε πραγματικό χρόνο.',
        'Μέσα από έναν διαδραστικό χάρτη, οι χρήστες μπορούν να δουν και να κρατήσουν θέση με ένα μόνο πάτημα.',
        'Το σύστημα πόντων επιβραβεύει τους οδηγούς που μοιράζονται τη θέση τους, ενισχύοντας την κοινότητα και διευκολύνοντας την εύρεση parking στις αστικές περιοχές.',
        'Επιπλέον, η εφαρμογή υπολογίζει τον χρόνο και τα χρήματα που εξοικονομεί κάθε χρήστης, προσφέροντας ξεκάθαρη εικόνα των καθημερινών οφελών.',
        'Ιδανική για καθημερινή χρήση, η εφαρμογή συνδυάζει ευκολία, αξιοπιστία και συνεργασία.'
      ],
      en: [
        'The app provides instant access to available on-street parking spots in real time.',
        'Through an interactive map, users can view and reserve parking spots with a single tap.',
        'The point-based system rewards drivers who share their spots, strengthening the community and making it easier to find parking in urban areas.',
        'Additionally, the app calculates the time and money each user saves, offering a clear picture of the daily benefits.',
        'Ideal for everyday use, the app combines convenience, reliability, and collaboration.'
      ]
    }
  },
  en: {
    hero: {
      title: "Find & Share Parking Spots Instantly",
      subtitle: "Your Smart Parking Solution",
      appStore: "App Store",
      googlePlay: "Google Play"
    },
    sections: {
      howItWorks: "How It Works",
      interactiveMap: "Interactive Map",
      features: "Key Features",
      pointsRewards: "Points & Rewards",
      notifications: "Notifications",
      settings: "Settings",
      support: "Support"
    },
    map: {
      title: "Real-time Spot Availability",
      description: "Our interactive map shows available parking spots with color-coded indicators:",
      smallSpots: "Small spots",
      mediumSpots: "Medium spots",
      largeSpots: "Large spots"
    },
    points: {
      title: "Earn While You Park",
      description: "Share your spot when leaving and earn points for free reservations. Track your global ranking and compete with other users.",
      pointPerRelease: "1 point per spot release",
      freeReservation: "Free reservation every 30 points",
      globalRanking: "Global leaderboard ranking"
    },
    notifications: {
      title: "Stay Updated",
      description: "Get instant notifications for new spots and navigate directly from alerts. Never miss a parking opportunity.",
      instantAlerts: "Instant spot availability alerts",
      oneTapNav: "One-tap navigation to spots",
      customPrefs: "Custom notification preferences"
    },
    settings: {
      title: "Customize Your Experience",
      description: "Personalize your app settings and track your parking history with detailed statistics.",
      language: "Language preferences",
      notifications: "Notification management",
      history: "Parking history & statistics"
    },
    support: {
      title: "Frequently Asked Questions",
      howToEarn: "How do I earn points?",
      earnAnswer: "Share your spot when leaving and earn +1 point for each confirmed release.",
      premiumBenefits: "What are the benefits of Premium?",
      premiumAnswer: "Get priority alerts, advanced filters, and detailed statistics with Premium.",
      contactSupport: "How do I contact support?",
      contactAnswer: "Email us at support@t-parking.gr or use the in-app chat for immediate assistance."
    },
    footer: {
      quickLinks: "Quick Links",
      legal: "Legal",
      contact: "Contact",
      rights: "© 2024 T-Parking. All rights reserved.",
      home: "Home",
      features: "Features",
      plans: "Plans",
      support: "Support",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      email: "Email: support@t-parking.gr",
      phone: "Phone: +30 210 1234567"
    },
    features: {
      liveMap: {
        title: "Live Map View",
        description: "See available spots in real-time with minute-by-minute updates"
      },
      instantReservations: {
        title: "Instant Reservations",
        description: "Reserve your spot with one tap and get instant confirmation"
      },
      shareEarn: {
        title: "Share & Earn",
        description: "Earn points when you share your spot with other drivers"
      },
      pointsSystem: {
        title: "Points System",
        description: "Collect points for free reservations and premium benefits"
      },
      realTimeUpdates: {
        title: "Real-time Updates",
        description: "Get instant notifications for new spots and availability changes"
      },
      communityDriven: {
        title: "Community Driven",
        description: "Part of a large community of drivers helping each other"
      }
    },
    steps: {
      openApp: {
        title: "Open the App",
        description: "Download the app and create your account"
      },
      findSpot: {
        title: "Find a Spot",
        description: "Use the map to find available spots near you"
      },
      reserveOrShare: {
        title: "Reserve or Share",
        description: "Book a seat with one tap or share yours when you leave, earning points every time."
      }
    },
    smartSection: {
      title: 'Smart Parking Solution',
      elTitle: 'Η Έξυπνη Λύση για το Parking στην Πόλη',
      el: [
        'Η εφαρμογή προσφέρει άμεση πρόσβαση σε διαθέσιμες θέσεις στάθμευσης στον δρόμο, σε πραγματικό χρόνο.',
        'Μέσα από έναν διαδραστικό χάρτη, οι χρήστες μπορούν να δουν και να κρατήσουν θέση με ένα μόνο πάτημα.',
        'Το σύστημα πόντων επιβραβεύει τους οδηγούς που μοιράζονται τη θέση τους, ενισχύοντας την κοινότητα και διευκολύνοντας την εύρεση parking στις αστικές περιοχές.',
        'Επιπλέον, η εφαρμογή υπολογίζει τον χρόνο και τα χρήματα που εξοικονομεί κάθε χρήστης, προσφέροντας ξεκάθαρη εικόνα των καθημερινών οφελών.',
        'Ιδανική για καθημερινή χρήση, η εφαρμογή συνδυάζει ευκολία, αξιοπιστία και συνεργασία.'
      ],
      en: [
        'The app provides instant access to available on-street parking spots in real time.',
        'Through an interactive map, users can view and reserve parking spots with a single tap.',
        'The point-based system rewards drivers who share their spots, strengthening the community and making it easier to find parking in urban areas.',
        'Additionally, the app calculates the time and money each user saves, offering a clear picture of the daily benefits.',
        'Ideal for everyday use, the app combines convenience, reliability, and collaboration.'
      ]
    }
  }
} as const; 