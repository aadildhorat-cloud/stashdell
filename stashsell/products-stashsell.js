/**
? Stashsell - Auto-generated Product Data
?? DO NOT EDIT MANUALLY - Synced from Google Sheets via Apps Script
? Generated: 2026-06-09T10:22:45.442Z
? Products: 9
? Repo: aadildhorat-cloud/stashdell
*/
(function () {
  const CONFIG = {
    basePath: "",
    imageDir: "/stashdell/images",
    fallbackImage: "/stashdell/images/stashdell-logo.jpg",
    businessName: "Stashsell",
    businessLogo: "/stashdell/images/stashdell-logo.jpg",
    resolveImage: (src) => {
      if (!src) return CONFIG.fallbackImage;
      if (src.startsWith('http')) return src;
      if (src.startsWith(CONFIG.basePath)) return src;
      if (src.startsWith('/')) return src;
      return `${CONFIG.basePath}${CONFIG.imageDir}/${src}`;
    }
  };

  const RAW_PRODUCTS = [
  {
    "id": "10l-boiler-bucket",
    "name": "10 L Boiler Bucket",
    "price": 49.99,
    "category": "boiler-buckets",
    "categorySlug": "boiler-buckets",
    "niche": "buckets",
    "location": "south-africa",
    "description": "Durable 10-liter boiler bucket perfect for industrial and commercial use",
    "badge": "? Popular",
    "businessName": "Stashsell",
    "businessLogo": "/stashdell/images/stashdell-logo.jpg",
    "image": "images/10l-boiler-bucket.jpg",
    "imageFallback": "/stashdell/images/stashdell-logo.jpg",
    "active": true,
    "sortOrder": 1
  },
  {
    "id": "20l-boiler-bucket",
    "name": "20 L Boiler Bucket",
    "price": 54.99,
    "category": "boiler-buckets",
    "categorySlug": "boiler-buckets",
    "niche": "buckets",
    "location": "south-africa",
    "description": "Heavy-duty 20-liter boiler bucket for demanding applications",
    "badge": "? Best Seller",
    "businessName": "Stashsell",
    "businessLogo": "/stashdell/images/stashdell-logo.jpg",
    "image": "images/20l-boiler-bucket.jpg",
    "imageFallback": "/stashdell/images/stashdell-logo.jpg",
    "active": true,
    "sortOrder": 2
  },
  {
    "id": "20l-dynamic-boiler-bucket",
    "name": "20 L Dynamic Boiler Bucket",
    "price": 55.99,
    "category": "boiler-buckets",
    "categorySlug": "boiler-buckets",
    "niche": "buckets",
    "location": "south-africa",
    "description": "Premium 20-liter dynamic boiler bucket with enhanced features",
    "badge": "? Premium",
    "businessName": "Stashsell",
    "businessLogo": "/stashdell/images/stashdell-logo.jpg",
    "image": "images/20l-dynamic-boiler-bucket.jpg",
    "imageFallback": "/stashdell/images/stashdell-logo.jpg",
    "active": true,
    "sortOrder": 3
  },
  {
    "id": "5l-standard-bucket",
    "name": "5 L Standard Bucket",
    "price": 17,
    "category": "standard-buckets",
    "categorySlug": "standard-buckets",
    "niche": "buckets",
    "location": "south-africa",
    "description": "Versatile 5-liter standard bucket for everyday household use",
    "badge": "? Budget Friendly",
    "businessName": "Stashsell",
    "businessLogo": "/stashdell/images/stashdell-logo.jpg",
    "image": "images/5l-standard-bucket.jpg",
    "imageFallback": "/stashdell/images/stashdell-logo.jpg",
    "active": true,
    "sortOrder": 4
  },
  {
    "id": "10l-bucket",
    "name": "10 L Bucket",
    "price": 22.99,
    "category": "standard-buckets",
    "categorySlug": "standard-buckets",
    "niche": "buckets",
    "location": "south-africa",
    "description": "Reliable 10-liter bucket suitable for various applications",
    "badge": "",
    "businessName": "Stashsell",
    "businessLogo": "/stashdell/images/stashdell-logo.jpg",
    "image": "images/10l-bucket.jpg",
    "imageFallback": "/stashdell/images/stashdell-logo.jpg",
    "active": true,
    "sortOrder": 5
  },
  {
    "id": "20l-standard-bucket",
    "name": "20 L Standard Bucket",
    "price": 29.99,
    "category": "standard-buckets",
    "categorySlug": "standard-buckets",
    "niche": "buckets",
    "location": "south-africa",
    "description": "Large capacity 20-liter standard bucket for heavy-duty tasks",
    "badge": "? Value Pack",
    "businessName": "Stashsell",
    "businessLogo": "/stashdell/images/stashdell-logo.jpg",
    "image": "images/20l-standard-bucket.jpg",
    "imageFallback": "/stashdell/images/stashdell-logo.jpg",
    "active": true,
    "sortOrder": 6
  },
  {
    "id": "white-folding-chair",
    "name": "White Folding Chair",
    "price": 110,
    "category": "furniture",
    "categorySlug": "furniture",
    "niche": "buckets",
    "location": "south-africa",
    "description": "Sturdy white folding chair, perfect for events and extra seating",
    "badge": "? Special",
    "businessName": "Stashsell",
    "businessLogo": "/stashdell/images/stashdell-logo.jpg",
    "image": "images/white-folding-chair.jpg",
    "imageFallback": "/stashdell/images/stashdell-logo.jpg",
    "active": true,
    "sortOrder": 7
  },
  {
    "id": "black-urban-chair",
    "name": "Black Urban Chair",
    "price": 38,
    "category": "furniture",
    "categorySlug": "furniture",
    "niche": "buckets",
    "location": "south-africa",
    "description": "Sturdy black urban chair, perfect for events and extra seating",
    "badge": "? Special",
    "businessName": "Stashsell",
    "businessLogo": "/stashdell/images/stashdell-logo.jpg",
    "image": "images/blackurbanchair.jpg",
    "imageFallback": "/stashdell/images/stashdell-logo.jpg",
    "active": true,
    "sortOrder": 8
  },
  {
    "id": "uslite-electric-stove",
    "name": "UsLite Electric Stove",
    "price": 110,
    "category": "furniture",
    "categorySlug": "furniture",
    "niche": "buckets",
    "location": "south-africa",
    "description": "2000W electric stove, perfect for cooking and heating needs",
    "badge": "? Special",
    "businessName": "Stashsell",
    "businessLogo": "/stashdell/images/stashdell-logo.jpg",
    "image": "images/uslite-electric-stove.jpg",
    "imageFallback": "/stashdell/images/stashdell-logo.jpg",
    "active": true,
    "sortOrder": 9
  }
];

  const PROCESSED = RAW_PRODUCTS
    .filter(p => p.active === true)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(product => ({
      ...product,
      image: CONFIG.resolveImage(product.image),
      imageFallback: CONFIG.fallbackImage,
      businessName: product.businessName || CONFIG.businessName,
      businessLogo: CONFIG.businessLogo,
      categorySlug: product.category?.trim().toLowerCase() || 'uncategorized',
      nicheSlug: product.niche?.trim().toLowerCase() || 'buckets',
      locationSlug: product.location?.trim().toLowerCase() || 'south-africa'
    }));

  window.STASHSELL_PRODUCTS = PROCESSED;
  window.STASHSELL_DATA = PROCESSED;

  window.StashsellProducts = {
    getAll: () => window.STASHSELL_PRODUCTS,
    getById: (id) => window.STASHSELL_PRODUCTS.find(p => p.id === id),
    getByCategory: (category) => 
      window.STASHSELL_PRODUCTS.filter(p => p.categorySlug === category.toLowerCase()),
    getByLocation: (location) => 
      window.STASHSELL_PRODUCTS.filter(p => p.locationSlug === location.toLowerCase()),
    getByNiche: (niche) => 
      window.STASHSELL_PRODUCTS.filter(p => p.nicheSlug === niche.toLowerCase()),
    filter: ({ category, location, niche }) => 
      window.STASHSELL_PRODUCTS.filter(p => {
        if (category && p.categorySlug !== category.toLowerCase()) return false;
        if (location && p.locationSlug !== location.toLowerCase()) return false;
        if (niche && p.nicheSlug !== niche.toLowerCase()) return false;
        return true;
      }),
    getWhatsAppLink: (product, phoneNumber = "27676567587") => {
      const msg = encodeURIComponent(
        `Hi! I'd like to order from ${product.businessName}:

` +
        `? *${product.name}*
` +
        `? Price: R${product.price.toFixed(2)}
` +
        `? ${product.description}

` +
        `Please confirm availability. Thank you!`
      );
      return `https://wa.me/${phoneNumber}?text=${msg}`;
    }
  };

  console.group("? Stashsell Products Loaded");
  console.log(`? ${PROCESSED.length} active products`);
  const byCat = {};
  PROCESSED.forEach(p => {
    byCat[p.categorySlug] = (byCat[p.categorySlug] || 0) + 1;
  });
  Object.entries(byCat).forEach(([cat, count]) => 
    console.log(`? ${cat}: ${count}`)
  );
  console.groupEnd();
})();