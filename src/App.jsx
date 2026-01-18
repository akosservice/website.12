import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  Star,
  MoveRight,
  Leaf,
  Globe,
  ArrowUpRight,
  Check,
  Instagram,
  Facebook,
  Linkedin,
  Quote
} from 'lucide-react';
import loraLogo from './assets/lorapng.png';
// Importing the collection image
import collectionImg from './assets/image.jpg'; 
// Importing the PDF Brochure
import catalogPdf from './assets/Lora Brochure compressed 2025.pdf';

// --- content / Translations ---

const content = {
  en: {
    nav: {
      story: 'Story',
      collection: 'Collection',
      works: 'Works',
      reviews: 'Reviews',
      services: 'Services',
      contact: 'Contact',
      quote: 'Get Quote'
    },
    hero: {
      est: 'Est. 2016 • Vayackal',
      title1: 'Natural Stones',
      title2: '&',
      title3: 'Landscaping',
      sub: "High-Quality Natural Stones & Trusted Landscaping Services Across Kerala.\nDirect from our factory to your doorstep.",
      cta_collection: 'View Collection',
      cta_studio: 'Find US'
    },
    about: {
      label: 'The Philosophy',
      title: '"Authenticity is the ultimate luxury."',
      p1: "It started in 2016 with a simple observation: beautiful landscapes were often out of reach due to inflated costs and disconnected middlemen.",
      p2: "At Lora Naturals, we chose a radical path. By operating as a direct factory outlet in Vayackal, we strip away the unnecessary, leaving only the purity of natural stone and the vibrancy of live plants.",
      p3: "We don't just sell materials; we provide the architectural skin for your home."
    },
    products: {
      label: 'Our Materials',
      title: 'Curated Collection',
      desc: 'From rugged Bangalore stones to delicate exotic plants, we offer a comprehensive range of landscaping essentials.',
      download: 'View Full Catalog',
      // link property is no longer used in JSX, we use the import directly
      link: 'https://loranaturals.in/products/', 
      bangalore: 'Bangalore Stones',
      bangalore_sub: 'Paving & Slabs',
      kadappa: 'Kadappa & Tandoor',
      kadappa_sub: 'Limestone Pavers',
      granite: 'Premium Granites',
      granite_sub: 'Slabs & Tiles',
      cladding: 'Wall Cladding',
      cladding_sub: 'Stone Facades',
      pebbles: 'Pebbles & Cobbles',
      pebbles_sub: 'Garden Accents',
      furniture: 'Stone Furniture',
      furniture_sub: 'Benches & Decor',
      grass_nat: 'Nature Lawn Grass',
      grass_nat_sub: 'Mexican & Buffalo',
      artificial: 'Artificial Solutions',
      artificial_sub: 'Turf, Vertical & Mats',
      plants: 'Indoor & Outdoor',
      plants_sub: 'Plants & Trees'
    },
    works: {
      label: 'Portfolio',
      title: 'Recent Transformations',
      desc: 'A showcase of how our materials transform ordinary spaces into extraordinary landscapes.'
    },
    reviews: {
      label: 'Client Stories',
      title: 'Trusted by Homeowners Across Kerala',
      desc: 'Rated 5.0 Stars on Google. We take pride in transforming visions into reality.',
      link: 'Read all Google Reviews'
    },
    services: {
      label: 'Why Lora?',
      title: "We don't just sell stones; we provide the foundation for your vision.",
      f1: 'Factory Direct',
      f1_d: 'No middlemen. No hidden margins. Just premium materials straight from our Vayackal facility to you.',
      f2: 'Sustainable',
      f2_d: 'We prioritize eco-friendly quarrying and nursery practices to ensure our planet stays as beautiful as your garden.',
      f3: 'Premium Quality',
      f3_d: 'Every stone and plant is inspected by our experts. If it\'s not perfect, it doesn\'t leave our yard.'
    },
    contact: {
      title: "Let's create something timeless.",
      sub: 'Experience the textures and colors in person at our factory outlet.',
      visit: 'Visit Us',
      call: 'Call Us',
      form: 'Send an Inquiry',
      name: 'Name',
      phone: 'Phone',
      msg: 'Message',
      btn: 'Send Message',
      sending: 'Sending...',
      sent: 'Message Sent'
    },
    footer: {
      about_t: 'About',
      about_d: 'Lora Natural Ventures is a premier direct-to-consumer factory outlet for natural stones and landscaping materials in Kerala.',
      links: 'Quick Links',
      loc: 'Locations Served',
      copy: 'Designed in Kerala.'
    }
  },
  ml: {
    nav: {
      story: 'കഥ',
      collection: 'ശേഖരം',
      works: 'വർക്കുകൾ',
      reviews: 'അഭിപ്രായങ്ങൾ',
      services: 'സേവനങ്ങൾ',
      contact: 'ബന്ധപ്പെടുക',
      quote: 'നിരക്കുകൾ'
    },
    hero: {
      est: 'സ്ഥാപിതം 2016 • വയയ്ക്കൽ',
      title1: 'നാച്ചുറൽ സ്റ്റോൺസ്',
      title2: '&',
      title3: 'ലാൻഡ്സ്കേപ്പിംഗ്',
      sub: "കേരളത്തിലുടനീളം ഹൈ-ക്വാളിറ്റി നാച്ചുറൽ സ്റ്റോണുകളും വിശ്വസ്തമായ ലാൻഡ്സ്കേപ്പിംഗ് സേവനങ്ങളും.\nനേരിട്ട് ഫാക്ടറിയിൽ നിന്ന് നിങ്ങളുടെ മുറ്റത്തേക്ക്.",
      cta_collection: 'ശേഖരം കാണുക',
      cta_studio: 'ഞങ്ങളുടെ ഓഫീസ്'
    },
    about: {
      label: 'തത്ത്വശാസ്ത്രം',
      title: '"തനിമയാണ് യഥാർത്ഥ ആഡംബരം."',
      p1: "2016-ൽ ലളിതമായൊരു ചിന്തയിൽ നിന്നാണ് തുടക്കം: ഇടനിലക്കാരുടെ ഇടപെടൽ മൂലം പലപ്പോഴും മികച്ച ലാൻഡ്‌സ്‌കേപ്പിംഗ് സാധാരണക്കാർക്ക് അപ്രാപ്യമായിരുന്നു.",
      p2: "ലോറ നാച്ചുറൽസിൽ ഞങ്ങൾ വ്യത്യസ്തമായൊരു വഴി തിരഞ്ഞെടുത്തു. വയയ്ക്കലിലെ ഞങ്ങളുടെ ഫാക്ടറി ഔട്ട്‌ലെറ്റിലൂടെ ഇടനിലക്കാരില്ലാതെ നേരിട്ട് ഉൽപ്പന്നങ്ങൾ എത്തിക്കുന്നു.",
      p3: "ഞങ്ങൾ വെറും കല്ലുകൾ വിൽക്കുകയല്ല, നിങ്ങളുടെ വീടിന് പ്രകൃതിദത്തമായ ഭംഗി നൽകുകയാണ്."
    },
    products: {
      label: 'ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ',
      title: 'ശേഖരങ്ങൾ',
      desc: 'ബാംഗ്ലൂർ സ്റ്റോൺ മുതൽ എക്സോട്ടിക് ചെടികൾ വരെ, ലാൻഡ്സ്കേപ്പിംഗിന് ആവശ്യമായതെല്ലാം ഒരിടത്ത്.',
      download: 'കാറ്റലോഗ് കാണുക',
      link: 'https://loranaturals.in/products/',
      bangalore: 'ബാംഗ്ലൂർ സ്റ്റോൺസ്',
      bangalore_sub: 'പേവിംഗ് & സ്ലാബ്സ്',
      kadappa: 'കടപ്പ & തന്തൂർ',
      kadappa_sub: 'ലൈംസ്റ്റോൺ',
      granite: 'പ്രീമിയം ഗ്രാനൈറ്റ്',
      granite_sub: 'സ്ലാബുകൾ',
      cladding: 'വാൾ ക്ലാഡിംഗ്',
      cladding_sub: 'എക്സ്റ്റീരിയർ',
      pebbles: 'പെബിൾസ് & കോബിൾസ്',
      pebbles_sub: 'ഗാർഡൻ അലങ്കാരങ്ങൾ',
      furniture: 'സ്റ്റോൺ ഫർണിച്ചർ',
      furniture_sub: 'ഗാർഡൻ ഇരിപ്പിടങ്ങൾ',
      grass_nat: 'നാച്ചുറൽ ലോൺ',
      grass_nat_sub: 'മെക്സിക്കൻ & ബഫല്ലോ',
      artificial: 'ആർട്ടിഫിഷ്യൽ ഗാർഡൻ',
      artificial_sub: 'ഗ്രാസ് & വെർട്ടിക്കൽ',
      plants: 'ഇൻഡോർ & ഔട്ട്ഡോർ',
      plants_sub: 'ചെടികളും മരങ്ങളും'
    },
    works: {
      label: 'പോർട്ട്ഫോളിയോ',
      title: 'മാറുന്ന മുഖച്ഛായകൾ',
      desc: 'ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ സാധാരണ സ്ഥലങ്ങളെ എങ്ങനെ അസാധാരണമായ ലാൻഡ്‌സ്‌കേപ്പുകളാക്കി മാറ്റുന്നു എന്ന് കാണുക.'
    },
    reviews: {
      label: 'ഉപഭോക്താക്കൾ',
      title: 'കേരളത്തിലുടനീളമുള്ള വിശ്വാസം',
      desc: 'ഗൂഗിളിൽ 5.0 സ്റ്റാർ റേറ്റിംഗ്. നിങ്ങളുടെ സ്വപ്നങ്ങൾ യാഥാർത്ഥ്യമാക്കുന്നതിൽ ഞങ്ങൾ അഭിമാനിക്കുന്നു.',
      link: 'ഗൂഗിൾ റിവ്യൂസ് വായിക്കാം'
    },
    services: {
      label: 'എന്തുകൊണ്ട് ലോറ?',
      title: "ഞങ്ങൾ കല്ലുകൾ മാത്രമല്ല നൽകുന്നത്; നിങ്ങളുടെ സ്വപ്നങ്ങൾക്ക് അടിത്തറയിടുകയാണ്.",
      f1: 'നേരിട്ട് ഫാക്ടറിയിൽ നിന്ന്',
      f1_d: 'ഇടനിലക്കാരില്ല. രഹസ്യ ചാർജുകളില്ല. വയയ്ക്കലിലെ ഫാക്ടറിയിൽ നിന്ന് നേരിട്ട് നിങ്ങളുടെ കൈകളിലേക്ക്.',
      f2: 'പരിസ്ഥിതി സൗഹൃദം',
      f2_d: 'പ്രകൃതിക്ക് കോട്ടം തട്ടാത്ത രീതിയിലുള്ള പ്രവർത്തനങ്ങൾക്ക് ഞങ്ങൾ മുൻഗണന നൽകുന്നു.',
      f3: 'പ്രീമിയം ക്വാളിറ്റി',
      f3_d: 'ഓരോ കല്ലും ചെടിയും ഞങ്ങളുടെ വിദഗ്ധർ നേരിട്ട് പരിശോധിക്കുന്നു.'
    },
    contact: {
      title: "നമുക്ക് നിർമ്മിക്കാം, കാലത്തെ വെല്ലുന്ന ഭംഗി.",
      sub: 'ടെക്സ്ചറുകളും നിറങ്ങളും നേരിട്ട് അനുഭവിച്ചറിയാൻ ഞങ്ങളുടെ ഫാക്ടറി ഔട്ട്‌ലെറ്റ് സന്ദർശിക്കൂ.',
      visit: 'സന്ദർശിക്കൂ',
      call: 'വിളിക്കൂ',
      form: 'വിവരങ്ങൾ അറിയാൻ',
      name: 'പേര്',
      phone: 'ഫോൺ',
      msg: 'സന്ദേശം',
      btn: 'സന്ദേശം അയക്കൂ',
      sending: 'അയക്കുന്നു...',
      sent: 'സന്ദേശം അയച്ചു'
    },
    footer: {
      about_t: 'About',
      about_d: 'Lora Natural Ventures is a premier direct-to-consumer factory outlet for natural stones and landscaping materials in Kerala.',
      links: 'Quick Links',
      loc: 'Locations Served',
      copy: 'Designed in Kerala.'
    }
  }
};

// --- Animations & Helpers ---

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const ParallaxImage = ({ src, alt, className }) => {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
      />
    </div>
  );
};

// --- SEO Component ---

const SEO = () => {
  useEffect(() => {
    document.title = "Lora Natural Ventures | Best Natural Stone Paving & Landscaping | Kollam, Kerala";
    // Mobile viewport fix
    let meta = document.querySelector('meta[name="viewport"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "viewport";
        document.head.appendChild(meta);
    }
    meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
  }, []);
  return null;
};

// --- Components ---

const Navigation = ({ lang, setLang, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
    scrolled 
      ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-neutral-100" 
      : "bg-transparent py-4 md:py-6 border-white/10"
  }`;

  const navKeys = ['story', 'collection', 'works', 'reviews', 'services'];
  
  const textColor = scrolled ? "text-[#4d2c18]" : "text-white";
  const toggleColor = isOpen ? "text-white" : textColor;
  const logoInvert = !isOpen && !scrolled;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        {/* LOGO */}
        <a href="#home" className="group z-[60] flex items-center gap-3 relative">
          <img 
            src={loraLogo} 
            alt="Lora Naturals" 
            className={`h-8 md:h-10 w-auto object-contain transition-all duration-500 ${logoInvert ? "" : ""}`} 
          />
          <div className="flex flex-col">
            <h1 className={`text-lg font-serif font-bold tracking-tight leading-none transition-colors duration-500 ${isOpen ? "text-white" : textColor}`}>
              Lora
            </h1>
            <span className={`text-[10px] uppercase tracking-widest transition-colors duration-500 ${isOpen ? "text-white/70" : (scrolled ? "text-neutral-500" : "text-white/70")}`}>Naturals</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navKeys.map((key) => (
            <a 
              key={key} 
              href={`#${key}`} 
              className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors cursor-pointer relative group ${
                scrolled ? "text-[#4d2c18] hover:text-[#fbb722]" : "text-white hover:text-[#fbb722]"
              }`}
            >
              {text[key]}
              <span className={`absolute -bottom-2 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-[#4d2c18]' : 'bg-white'}`}></span>
            </a>
          ))}
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'ml' : 'en')}
            className={`flex items-center gap-2 px-3 py-1 rounded border transition-all ${
              scrolled 
              ? "border-[#4d2c18] text-[#4d2c18] hover:bg-[#4d2c18] hover:text-[#fbb722]" 
              : "border-white/30 text-white hover:bg-white hover:text-[#4d2c18]"
            }`}
          >
            <Globe size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'en' ? 'ML' : 'EN'}</span>
          </button>

          <a href="#contact" className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border ${
              scrolled 
                ? "border-[#4d2c18] text-[#4d2c18] hover:bg-[#4d2c18] hover:text-[#fbb722]" 
                : "border-white text-white hover:bg-white hover:text-[#4d2c18]"
            }`}>
            {text.quote}
          </a>
        </div>

        {/* Mobile Toggle & Lang */}
        <div className="flex items-center gap-4 md:hidden z-[60]">
            <button 
                onClick={() => setLang(lang === 'en' ? 'ml' : 'en')}
                className={`px-2 py-1 border rounded text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${
                    isOpen 
                    ? "border-white text-white" 
                    : (scrolled ? "border-[#4d2c18] text-[#4d2c18]" : "border-white/50 text-white")
                }`}
            >
                {lang === 'en' ? 'ML' : 'EN'}
            </button>

            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`relative p-1 transition-colors duration-500 ${toggleColor}`}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#4d2c18] z-50 flex flex-col justify-center items-center gap-8 transition-all duration-500 cubic-bezier(0.7,0,0.3,1) ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
           {[...navKeys, 'contact'].map((key) => (
            <a key={key} href={`#${key}`} onClick={() => setIsOpen(false)} className="text-3xl font-serif text-white/90 hover:text-[#fbb722] hover:italic transition-all">
              {text[key]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ text }) => (
  <header id="home" className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-neutral-900">
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2600" 
        alt="Serene Landscape" 
        className="w-full h-full object-cover animate-[scale_25s_ease-in-out_infinite_alternate]" 
      />
    </div>
    
    <div className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white">
      <FadeIn>
        <div className="inline-flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="h-px w-6 md:w-8 bg-white/60"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">{text.est}</span>
            <span className="h-px w-6 md:w-8 bg-white/60"></span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 tracking-tight">
          {text.title1} <span className="italic font-light opacity-80">{text.title2}</span> <br className="md:hidden" /> {text.title3}
        </h1>
        
        <p className="max-w-xs md:max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-light mb-8 md:mb-12 leading-relaxed tracking-wide whitespace-pre-line">
          {text.sub}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <a href="#collection" className="bg-white text-[#4d2c18] w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors">
            {text.cta_collection}
          </a>
          <a href="https://maps.app.goo.gl/siGegDRjxeDLGqFK9" className="border border-white/40 backdrop-blur-sm w-full sm:w-auto text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#4d2c18] transition-all">
            {text.cta_studio}
          </a>
        </div>
      </FadeIn>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
  </header>
);

const About = ({ text }) => (
  <section id="story" className="py-20 md:py-32 bg-[#F9F9F7] overflow-hidden w-full">
    <div className="container mx-auto px-4 md:px-12">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="lg:col-span-6 lg:order-2 relative w-full">
             <div className="hidden md:block absolute -top-10 -right-10 w-full h-full border border-neutral-300 z-0"></div>
             <FadeIn delay={200}>
                <ParallaxImage 
                    src="https://lh3.googleusercontent.com/p/AF1QipO9oY5QO04AkpAbuVKxrZpTcbbg_k2u3oiZmM8s=s1360-w1360-h1020" 
                    alt="Stone Texture" 
                    className="aspect-[4/5] shadow-2xl z-10 relative grayscale-[20%] w-full rounded-sm"
                />
             </FadeIn>
        </div>
        
        <div className="lg:col-span-6 lg:order-1">
          <FadeIn>
            <div className="mb-8 md:mb-10">
                <span className="text-[#4d2c18] text-xs font-bold uppercase tracking-widest block mb-4">{text.label}</span>
                <h2 className="text-3xl md:text-6xl font-serif text-[#4d2c18] leading-tight">
                    {text.title}
                </h2>
            </div>
            
            <div className="space-y-6 md:space-y-8 text-neutral-600 font-light text-base md:text-lg leading-relaxed border-l-2 border-neutral-300 pl-6 md:pl-8">
              <p>{text.p1}</p>
              <p className="font-medium text-[#4d2c18]">{text.p2}</p>
              <p>{text.p3}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

// --- UPDATED PRODUCTS COMPONENT (Now downloads PDF) ---

const Products = ({ text, lang }) => (
  <section id="collection" className="py-20 md:py-32 bg-white w-full">
    <div className="container mx-auto px-4 md:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-neutral-100 pb-8">
        <div className="max-w-2xl">
          <span className="text-[#4d2c18] text-xs font-bold uppercase tracking-widest block mb-4">
            {text.label}
          </span>
          <h2 className="text-3xl md:text-7xl font-serif text-[#4d2c18] mb-4 md:mb-6">
            {text.title}
          </h2>
          <p className="text-neutral-500 text-base md:text-lg font-light max-w-lg">
            {text.desc}
          </p>
        </div>
        <a 
          href={catalogPdf} 
          download="Lora Brochure compressed 2025.pdf" // Added download attribute
          className="group flex items-center gap-4 text-[#4d2c18] text-sm font-bold uppercase tracking-widest hover:text-[#4d2c18]/80 transition-colors"
        >
          {text.download} 
          <span className="bg-neutral-100 p-3 rounded-full group-hover:bg-[#fbb722]/20 transition-colors">
            <MoveRight size={16} />
          </span>
        </a>
      </div>

      {/* Clean Image Display (No shadow, no text overlay, just hover arrow) */}
      <FadeIn delay={0}>
        <div className="relative w-full overflow-hidden rounded-sm group cursor-pointer">
          <img 
            src={collectionImg} 
            alt="Lora Naturals Collection" 
            className="w-full h-full object-cover object-center"
          />
          
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              
              <div className="flex justify-end items-end">
                
                {/* Only the hover arrow remains */}
                <div className="bg-white text-[#4d2c18] p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

const RecentWorks = ({ text }) => (
  <section id="works" className="py-20 md:py-32 bg-[#F9F9F7] w-full">
    <div className="container mx-auto px-4 md:px-12">
      <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
        <span className="text-[#4d2c18] text-xs font-bold uppercase tracking-widest block mb-4">{text.label}</span>
        <h2 className="text-3xl md:text-6xl font-serif text-[#4d2c18] mb-6">{text.title}</h2>
        <p className="text-neutral-500 font-light text-base md:text-lg px-4">{text.desc}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[
            {img: "https://lh3.googleusercontent.com/p/AF1QipMk01U2U-twp-5L7mdqkKYsfDtCm8Op2vYDF7t6=s1360-w1360-h1020", title: "Natural Stone Paving", loc: "Kollam"},
            {img: "https://lh3.googleusercontent.com/p/AF1QipPqa_AF1pLKqqyYWZ-lEmqmun7kGjZpXomOG1oz=s1360-w1360-h1020", title: "Garden Landscaping", loc: "Trivandrum"},
            {img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSymTIbVbEioWoOYQe99yf16B6PlUsOinHb9PK2DWBPnhgka2o6uT9iJM9ZhNqK_Ppf3Bnr2SkVCtJ-bz2EAuRHPcUN8I5xvdB8Pg16w5Y_J2AS-j-LOPLzksNA4Q9UY4doF4Gs=s1360-w1360-h1020", title: "Exterior Cladding", loc: "Kochi"},
            {img: "https://lh3.googleusercontent.com/p/AF1QipO9oY5QO04AkpAbuVKxrZpTcbbg_k2u3oiZmM8s=s1360-w1360-h1020", title: "Courtyard Design", loc: "Kottarakkara"},
            {img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyQymwRa9_2Mn18nsP2Qmtj--eUn8-4tzJ8PHZ1DMILcFaA_1M6WAbZc1LV0WCUorU5XVyJUQqV2HOh9YFxx6-g9FpTxHa29ZkwZA7KnaBmYBI6K5s0ZAlbC7hki93AH6aFd66_=s1360-w1360-h1020", title: "Driveway Paving", loc: "Punalur"},
            {img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwaXqOWHqJO1QQWytuL8oC3zTyvFPSQ7eGpgIjdA2aWn3N8krRsq3Sj-YdpCn5Mh-A0PcgAeXERdAcHdcxgxg5pAoSNCs35bg9dXSj0gC_ma5NBsfiH1__Zq_G3tqd54blDwRGtxQ=s1360-w1360-h1020", title: "Patio Walkway", loc: "Anchal"},
            {img: "https://lh3.googleusercontent.com/p/AF1QipPQu8qL8bHRR416wSfxfyWC_52KCl-tBdRaE6eL=s1360-w1360-h1020", title: "Resort Landscape", loc: "Chengannur"},
            {img: "https://lh3.googleusercontent.com/p/AF1QipNfGAWmw92hdopwyXiN9k-Z7Y62V1ZIWpwsFIvk=s1360-w1360-h1020", title: "Stone Wall Feature", loc: "Pathanamthitta"},
            {img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy8QykO6YGdSQXY3FqW5ByOB_waDr74rifAwibUn48oeLA7qnc8zgNF_f7G974LILUstd3DF5VXuaM42AZfYEYU4VmkVXohWBBVwGSQ1AspSBsOuUn-ogUdWjxDnXpCK4OC0U06-_rsh9Q-=s1360-w1360-h1020", title: "Outdoor Living", loc: "Alleppey"},
            {img: "https://lh3.googleusercontent.com/p/AF1QipOA4O8auY7C_J33V1sHJSPm4lB3wOmCFxdwllJR=s1360-w1360-h1020", title: "Entryway Design", loc: "Calicut"},
            {img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzaZ8uk8KOdtt8sI0MdgnUXAvC6vJRg1v00J8b6eIWwZ-1M_2oNGKIbi8mL2Q-LHgO0VuBxOY-sYMwTemLpnhmOMh_YBhy6e40sBpo57WCA1pUEjquA7HqmvesR1NSCRXjbOAyhE7wJeRxW=s1360-w1360-h1020", title: "Custom Stone Work", loc: "Thrissur"}
        ].map((item, i) => (
            <FadeIn key={i} delay={i * 50}>
                <div className="group cursor-pointer">
                    <div className="overflow-hidden aspect-square mb-4">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex justify-between items-end border-b border-neutral-300 pb-4 group-hover:border-[#4d2c18] transition-colors">
                        <div>
                            <h3 className="text-lg md:text-xl font-serif text-[#4d2c18]">{item.title}</h3>
                            <p className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-wider mt-1">{item.loc}</p>
                        </div>
                        <ArrowUpRight size={18} className="text-neutral-300 group-hover:text-[#4d2c18] transition-colors" />
                    </div>
                </div>
            </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = ({ text }) => (
  <section id="reviews" className="py-20 md:py-32 bg-white border-b border-neutral-100 w-full">
    <div className="container mx-auto px-4 md:px-12">
      <div className="max-w-3xl mb-12 md:mb-20">
        <span className="text-[#4d2c18] text-xs font-bold uppercase tracking-widest block mb-4">{text.label}</span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#4d2c18] mb-6">{text.title}</h2>
        <p className="text-neutral-500 text-base md:text-lg font-light">{text.desc}</p>
        <a href="https://maps.app.goo.gl/eRGYuuoRE9BqVMPs5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-[#4d2c18] hover:text-[#4d2c18]/80 transition-colors">
          {text.link} <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {[
          {
            name: "Joby Titus",
            text: "Lora Naturals exceeded our expectations with their stone laying and garden work. The quality, craftsmanship, and attention to detail were outstanding, giving our home a fresh and elegant look. We appreciate their professionalism and dedication. Thank you for the excellent work—highly recommended!",
            loc: "",
            img: "https://lh3.googleusercontent.com/a-/ALV-UjV0Xr3oJBwRD8_1Ip4gST_ZjyHZyVhoq3KpFZD61xFEcxYKdffX=w144-h144-p-rp-mo-br100"
          },
          {
            name: "Sarah Thomas",
            text: "",
            loc: "Trivandrum",
            img: "https://lh3.googleusercontent.com/p/AF1QipO9oY5QO04AkpAbuVKxrZpTcbbg_k2u3oiZmM8s=s1360-w1360-h1020"
          },
          {
            name: "Vishnu Prasad",
            text: "Highly recommended for landscaping needs. The variety of pebbles and wall cladding options is impressive. Delivered on time to our site in Punalur.",
            loc: "Punalur",
            img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwaXqOWHqJO1QQWytuL8oC3zTyvFPSQ7eGpgIjdA2aWn3N8krRsq3Sj-YdpCn5Mh-A0PcgAeXERdAcHdcxgxg5pAoSNCs35bg9dXSj0gC_ma5NBsfiH1__Zq_G3tqd54blDwRGtxQ=s1360-w1360-h1020"
          }
        ].map((review, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="bg-[#F9F9F7] p-8 h-full flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="flex gap-1 text-[#fbb722] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <Quote size={32} className="text-neutral-300 mb-4" />
                <p className="text-neutral-700 font-light italic mb-8 leading-relaxed">"{review.text}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200 flex-shrink-0">
                   <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#4d2c18]">{review.name}</h4>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">{review.loc}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Feature = ({ Icon, title, desc }) => (
  <div className="flex flex-col p-8 md:p-10 bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-2xl transition-all duration-500 group">
    <div className="mb-6 md:mb-8 text-neutral-300 group-hover:text-[#4d2c18] transition-colors"><Icon size={32} strokeWidth={1.5} /></div>
    <h3 className="text-xl md:text-2xl font-serif text-[#4d2c18] mb-4 group-hover:translate-x-2 transition-transform">{title}</h3>
    <p className="text-neutral-500 font-light leading-relaxed text-sm md:text-base">{desc}</p>
  </div>
);

const Services = ({ text }) => (
  <section id="services" className="py-20 md:py-32 bg-white w-full">
    <div className="container mx-auto px-4 md:px-12">
      <div className="max-w-3xl mb-12 md:mb-20">
        <span className="text-[#4d2c18] text-xs font-bold uppercase tracking-widest block mb-4">{text.label}</span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#4d2c18]">{text.title}</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-0 border-t border-l border-neutral-100">
        <FadeIn delay={0}><Feature Icon={MapPin} title={text.f1} desc={text.f1_d} /></FadeIn>
        <FadeIn delay={150}><Feature Icon={Leaf} title={text.f2} desc={text.f2_d} /></FadeIn>
        <FadeIn delay={300}><Feature Icon={Star} title={text.f3} desc={text.f3_d} /></FadeIn>
      </div>
    </div>
  </section>
);

const Contact = ({ text }) => {
  const [formStatus, setFormStatus] = useState('idle');
  const handleSubmit = (e) => { e.preventDefault(); setFormStatus('sending'); setTimeout(() => { setFormStatus('success'); setTimeout(() => setFormStatus('idle'), 3000); }, 1500); };

  return (
    <section id="contact" className="relative bg-[#4d2c18] text-white overflow-hidden w-full">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="relative p-6 py-16 md:p-12 lg:p-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            
            <FadeIn>
                <div>
                    <h2 className="text-4xl md:text-7xl font-serif mb-6 md:mb-8 whitespace-pre-line leading-tight">{text.title}</h2>
                    <p className="text-white/60 text-base md:text-lg font-light max-w-md">{text.sub}</p>
                </div>
            </FadeIn>

            <FadeIn delay={200} className="mt-12 md:mt-16 space-y-8 md:space-y-12">
                <div className="flex gap-4 md:gap-6 items-start group">
                    <div className="mt-1 text-[#fbb722] group-hover:scale-110 transition-transform"><MapPin size={24} /></div>
                    <div>
                        <h4 className="font-serif text-xl md:text-2xl mb-2 text-white">{text.visit}</h4>
                        <p className="text-white/50 font-light leading-relaxed text-sm md:text-base">LORA NATURALS, LMS LOWER PRIMARY SCHOOL,<br/>OLD MARKET, OPOSITE TO, Vayakal, Kerala 691532</p>
                        <a href="https://maps.app.goo.gl/siGegDRjxeDLGqFK9" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:text-[#fbb722] hover:border-[#fbb722] transition-colors">Get Directions</a>
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6 items-start group">
                    <div className="mt-1 text-[#fbb722] group-hover:scale-110 transition-transform"><Phone size={24} /></div>
                    <div>
                        <h4 className="font-serif text-xl md:text-2xl mb-2 text-white">{text.call}</h4>
                        <p className="text-white/50 font-light mb-1 text-sm md:text-base">Mon - Sat, 9am - 6pm</p>
                        <p className="text-lg md:text-xl">087400 16002</p>
                    </div>
                </div>
            </FadeIn>
        </div>

        <div className="p-6 py-16 md:p-12 lg:p-24 flex flex-col justify-center bg-white text-neutral-900">
             <FadeIn delay={300}>
                <form className="max-w-md mx-auto w-full" onSubmit={handleSubmit}>
                    <h3 className="text-2xl md:text-3xl font-serif mb-8 md:mb-10 text-[#4d2c18]">{text.form}</h3>
                    <div className="space-y-6 md:space-y-8">
                        <div className="relative">
                            <input type="text" className="peer w-full border-b border-neutral-300 py-3 md:py-4 text-base md:text-lg focus:border-[#4d2c18] focus:outline-none bg-transparent placeholder-transparent" id="name" placeholder="Name" required />
                            <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#4d2c18] uppercase tracking-widest font-bold">{text.name}</label>
                        </div>
                        <div className="relative">
                            <input type="tel" className="peer w-full border-b border-neutral-300 py-3 md:py-4 text-base md:text-lg focus:border-[#4d2c18] focus:outline-none bg-transparent placeholder-transparent" id="phone" placeholder="Phone" required />
                            <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#4d2c18] uppercase tracking-widest font-bold">{text.phone}</label>
                        </div>
                        <div className="relative">
                            <textarea rows="4" className="peer w-full border-b border-neutral-300 py-3 md:py-4 text-base md:text-lg focus:border-[#4d2c18] focus:outline-none bg-transparent placeholder-transparent resize-none" id="message" placeholder="Message" required></textarea>
                            <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#4d2c18] uppercase tracking-widest font-bold">{text.msg}</label>
                        </div>
                        
                        <button type="submit" disabled={formStatus !== 'idle'} className={`w-full py-4 md:py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 mt-6 md:mt-8 ${formStatus === 'success' ? 'bg-[#fbb722] text-[#4d2c18]' : 'bg-[#4d2c18] text-white hover:bg-[#3a2111]'}`}>
                            {formStatus === 'idle' && text.btn}
                            {formStatus === 'sending' && text.sending}
                            {formStatus === 'success' && <>{text.sent} <Check size={16} /></>}
                        </button>
                    </div>
                </form>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ text }) => (
  <footer className="bg-[#4d2c18] border-t border-white/5 pt-12 md:pt-20 pb-10 w-full">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
        <div className="flex items-center gap-4">
             <div className="flex items-center gap-3">
                <img 
                    src={loraLogo} 
                    alt="Lora Naturals" 
                    className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-80" 
                /> 
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Lora.Naturals</h2>
        </div>
        <div className="flex gap-6 mt-6 md:mt-0">
            <a href="https://www.instagram.com/lora_naturals_/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#4d2c18] transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#4d2c18] transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#4d2c18] transition-all"><Linkedin size={18} /></a>
        </div>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16 border-b border-white/10 pb-12 md:pb-16">
        <div className="col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#fbb722]/80 mb-4 md:mb-6">{text.about_t}</h4>
            <p className="text-white/60 font-light leading-relaxed max-w-md text-sm md:text-base">{text.about_d}</p>
        </div>
        <div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-[#fbb722]/80 mb-4 md:mb-6">{text.links}</h4>
             <ul className="space-y-3 md:space-y-4">
                {['story', 'collection', 'works', 'services'].map(key => (
                    <li key={key}><a href={`#${key}`} className="text-white/70 hover:text-white transition-colors capitalize text-sm md:text-base">{key}</a></li>
                ))}
             </ul>
        </div>
        <div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-[#fbb722]/80 mb-4 md:mb-6">{text.loc}</h4>
             <p className="text-white/60 font-light leading-relaxed text-sm">
                Trivandrum • Kollam • Kochi • Thrissur • Calicut • Wayanad • Kannur • All Kerala
             </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-white/30 font-bold uppercase tracking-widest gap-4 md:gap-0 text-center md:text-left pt-2">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
            <p>© {new Date().getFullYear()} Lora Natural Ventures.</p>
            <span className="hidden md:block text-white/10">|</span>
            <a 
              href="#" 
              className="flex items-center gap-1.5 group transition-all duration-300 hover:text-white"
            >
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">Powered by</span>
                <span className="text-[#fbb722] font-black tracking-widest group-hover:drop-shadow-[0_0_8px_rgba(251,183,34,0.4)] transition-all">
                    AKOSNOW WebServices
                </span>
            </a>
        </div>
        <p className="opacity-50">{text.copy}</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [lang, setLang] = useState('en');
  const text = content[lang];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-[#fbb722] selection:text-[#4d2c18] scroll-smooth overflow-x-hidden w-full max-w-[100vw] relative">
      <SEO />
      <Navigation lang={lang} setLang={setLang} text={text.nav} />
      <Hero text={text.hero} />
      <About text={text.about} />
      <Products text={text.products} lang={lang} />
      <RecentWorks text={text.works} />
      <Testimonials text={text.reviews} />
      <Services text={text.services} />
      <Contact text={text.contact} />
      <Footer text={text.footer} />
    </div>
  );
};

export default App;
