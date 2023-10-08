


    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#FFD2A4',
            navbg : '#0D0D0D',
            navbtntxt : '#1C1D28',
            subHeading : '#161722',
            serviceitembg : '#FFF5EB',
            watchbg : '#F5F2F0',
            ftrform : 'rgba(255, 255, 255, 0.15)',
          },
          maxWidth: {
            'container': '1280px',
          },
          fontFamily: {
           'robotoCondensed': "'Roboto Condensed', sans-seri",
          },
          backgroundImage: {
            'bannerImg': "url('images/banner.jpg')",
            overly : 'linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%)',
            textgradient : 'linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%)',
            'visitImg': "url('images/visit.jpg')",
          },
          fontSize: {
              bannerHeading: '64px',
          },
          lineHeight: {
            'big': '82px',
            'middium': '64px',
          },
          letterSpacing: {
            bigHeading: '0.64px',
            subHeading: '0.48px',
            serviceHeading: '0.32px',
            watchHeading: '0.42px',
            upcominh5: '0.96px',
          },
           opacity: {
            '78': '0.78',
            '8': '0.8',
          },
        }
      }
    }
