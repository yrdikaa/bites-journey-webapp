export const checkTokenAndRedirect = (router) => {
    // Pastikan kode ini hanya dijalankan di sisi klien
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
  
      // Jika token ada, lakukan redirect ke halaman lain (misalnya, '/dashboard')
      if (token) {
        window.location.href = '/home'
      }
    }
  };