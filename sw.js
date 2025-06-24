// Service Worker for ClosetLoop Push Notifications
const CACHE_NAME = 'closetloop-v1';
const urlsToCache = [
  './',
  './index.html',
  './js/notifications.js',
  './js/firebase-config.js'
];

// Install event
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.warn('Cache addAll failed:', error);
        // Continue even if caching fails
        return Promise.resolve();
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  // Skip placeholder images and external resources that might fail
  if (event.request.url.includes('via.placeholder.com') || 
      event.request.url.includes('placeholder.com') ||
      event.request.url.includes('unsplash.com')) {
    // Let these requests go directly to the network without caching
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request).catch(error => {
          console.warn('Fetch failed for:', event.request.url, error);
          // Return a fallback response for failed requests
          if (event.request.destination === 'image') {
            // Return a simple fallback for images
            return new Response('', {
              status: 404,
              statusText: 'Image not found'
            });
          }
          throw error;
        });
      })
      .catch(error => {
        console.warn('Cache match failed:', error);
        // Try to fetch from network as fallback
        return fetch(event.request).catch(fetchError => {
          console.warn('Network fetch also failed:', fetchError);
          // Return a simple error response
          return new Response('Resource not available', {
            status: 404,
            statusText: 'Not Found'
          });
        });
      })
  );
});

// Push notification event
self.addEventListener('push', event => {
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'You have a new notification from ClosetLoop',
    icon: '/assets/favicon.png',
    badge: '/assets/favicon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/assets/favicon.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/assets/favicon.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('ClosetLoop', options)
  );
});

// Notification click event
self.addEventListener('notificationclick', event => {
  console.log('Notification clicked:', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    // Open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    event.notification.close();
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  console.log('Background sync triggered:', event);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      console.log('Processing background sync...')
    );
  }
});

// Message event for communication with main thread
self.addEventListener('message', event => {
  console.log('Service Worker received message:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
}); 