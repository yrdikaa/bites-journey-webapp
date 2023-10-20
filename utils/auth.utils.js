import jwtDecode from "jwt-decode";

export const checkTokenAndRedirect = (router) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
      
      // Periksa apakah token telah kedaluwarsa
      if (decodedToken.exp > currentTime) {
        // Token masih valid, lakukan redirect ke halaman /home
        router.push('/home');
      } else {
        // Token telah kedaluwarsa, tidak melakukan apa-apa
        console.log('Token sudah kedaluwarsa');
        localStorage.clear('token')
      }
    } else {
      // Token tidak ditemukan, tidak melakukan apa-apa
      console.log('Token tidak ditemukan');
    }
  }
  };

  export const checkPage = (router) => {
    // Pastikan kode ini hanya dijalankan di sisi klien
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
  


      // Jika token ada, lakukan redirect ke halaman lain (misalnya, '/dashboard')
      if (!token) {
        window.location.href = '/login'
      }
    }
  };