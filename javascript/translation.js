const translations = {
    en: {
      "slogan": "Sunking in the Beauty of",
      "desc-hero": "The beauty of Negeri kahyanganajgluhaeuighlshg.auerhghwebgawu"
    },
    id: {
      "slogan": "Terbenam dalam Keindahan",
      "desc-hero": "Nuansa negeri dongeng di lembah Gunung Merbabu bak negeri kahyangan yang asri dan pastinya instagramable. Dilengkapi dengan berbagai fasilitas yang lengkap serta nyaman membuat Negeri Kahyangan suatu destinasi wisata yang ramah keluarga."
    }
  };
  
  function setLanguage(lang) {
    $('[data-i18n]').each(function() {
      const key = $(this).data('i18n');
      $(this).text(translations[lang][key]);
    });
  }
  
  setLanguage('en');