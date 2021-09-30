/* =====================================
Template Name: Precon
Author Name: ThemeLamp
Author URI: http://themelamp.com/
Description: Precon is a Multipurpose Business HTML5 Template.
Version:	1.0
========================================*/
import Cookies from 'js-cookie'

var i18njs = require('i18njs');

var en_locales = {
    'menu': {
        'up': 'Top',
        'about': 'About Us',
        'services': 'Our Services',
        'whyus': 'Why choose us',
        'contact': 'Contact us',
        'lang': 'Español'
    },
    'aboutus': {
        'header': "About Us",
        'title': "We are <span>passionate</span> about solutions",
        'body': "We are a small firm yet dedicated to providing modern, scalable, secure and flexible web/mobile solutions. We offer services made with quality and passion for your business needs."
    },
    'action': {
        'title': 'Are you looking for a reliable team to develop your project?',
        'msg': 'Let us know more about your idea and we will bring it to life!'
    },
    'services': {
        'title': '<span>Capabilities</span>What we do',
        'phrase': 'We Analyze, Design, Build, Test & Deploy',
        'dev': {
            'title': 'Web/Mobile Development',
            'body': 'We are focused on delivering cutting-edge solutions and best practices. Using the latest and most widely adopted technologies on the market.'
        },
        'design': {
            'title': 'Web Design',
            'body': 'Go beyond a brochure website. Modern web design should call your clients to action interacting with your business and services.'
        },
        'recruting': {
            'title': 'IT Recruiting',
            'body': 'Let us take care of the scouting and management of the best talent for your needs in the development of modern applications.'
        },
        'linux': {
            'title': 'Cloud & Virtualization Solutions',
            'body': 'From a locally managed IT environment, maintaining cloud datacenters or administering virtual servers and applications, we got you cover.'
        },
        'consulting': {
            'title': 'Consulting',
            'body': "We'll listen, consider your business model, understand your audiences, competition and everything that plays a role in your project in order to partner with you in achieving success."
        },
        'seo': {
            'title': 'Search Engine Optimization',
            'body': 'We help you achieve more sales and more money for your business by improving your website visibility in search engines'
        },
    },
    'whyus': {
        'title': '<span>Highlights</span> Why choose us?',
        'teams': {
            'title': 'Dedicated Teams',
            'body': 'An assigned team working actively on your project.'
        },
        'tasks': {
            'title': 'Task Prioritization',
            'body': 'You will be part of the work team guaranteeing the necessary detail for each requirement.'
        },
        'agile': {
            'title': 'Agile Mindset',
            'body': 'We work with agile methodologies guaranteeing functional deliveries in each work sprint.'
        },
        'dailies': {
            'title': 'Daily Standups',
            'body': 'Daily stand-ups among the development team to check the status of each task.'
        },
        'project': {
            'title': 'Project Checks',
            'body': 'Ongoing validation of the project, including your criteria as a <span>product owner</span>.'
        },
    },
    'team': {
        'title': '<span>Team</span>Get to know us',
        'phrase': 'Meet the faces of our organization',
        'asd': {
            'name': 'Asdrúbal Chirinos',
            'role': 'CEO, Development Manager',
            'bio': 'Web Development Coach. Leading teams to success. Full Stack Developer',
        },
        'ger': {
            'name': 'German Cardozo',
            'role': 'UNIX/Linux Expert',
            'bio': 'Virtualization & Development Specialist. DevOps & Automation Consultant.',
        },
        'fab': {
            'name': 'Fabiola Márquez',
            'role': 'Recruitment Manager',
            'bio': 'IT Recruiter, Talent Acquisition Specialist, Head Hunter',
        },
        'bea': {
            'name': 'Beatriz Márquez',
            'role': 'Bussiness Manager',
            'bio': 'Bussiness and Project Managment consultor',
        }
    },
    'contact': {
        'title': '<span>Contact</span>With us',
        'phrase': "Enough talking about us, We want to hear about you, send us a message and we'll respond right away.",
        'body': '',
        'name': 'Full Name',
        'email': 'Your Email',
        'subject': 'Type Subject',
        'message': 'Type Your Message',
        'send': 'Send Message',
        'info':'Contact information',
        'more':'Let us know more about you, feel free to reach us at any moment.',
        'officialEmail':'Official Email',
        'phone': 'Phone',
        'address': 'Our location',
        'thanks': {
            'title': 'Thanks for reaching us',
            'body': 'We\'ll get back to you soon!'
        },
        'required': "This field is required."
    }
};

var es_locales = {
    'menu': {
        'up': "Volver al inicio",
        'about': 'Nosotros',
        'services': 'Servicios',
        'whyus': 'Porque elegirnos',
        'contact': 'Contáctenos',
        'lang': 'English'
    },
    'aboutus': {
        'header': "Sobre nosotros",
        'title': "Nos <span>apasiona</span> dar soluciones",
        'body': "Somos una empresa pequeña pero dedicada a proveer soluciones modernas, escalables, seguras y flexibles en desarrollo web/móvil. Ofrecemos servicios hechos con calidad y pasión para las necesidades de su negocio."
    },
    'action': {
        'title': '¿Estás en busca de un equipo confiable para desarrollar su proyecto?',
        'msg': '¡Queremos conocer tu idea y ayudarte a hacerla realidad!'
    },
    'services': {
        'title': '<span>Servicios</span>Que hacemos',
        'phrase': 'Análisis, diseño, desarrollo, pruebas y despliegue',
        'dev': {
            'title': 'Desarrollos Web/Móvil',
            'body': 'Nos centramos en ofrecer soluciones modernas, utilizando las mejores prácticas y las tecnologías más reconicidas y actuales en el mercado.'
        },
        'design': {
            'title': 'Diseño Web',
            'body': 'Ve más allá de tener una simple página web, el diseño web moderno debe invitar a la interacción de tus productos y marcas con tu cliente.'
        },
        'recruting': {
            'title': 'Personal IT',
            'body': 'Déjanos encargarnos de la búsqueda y gestión del talento para tus necesidades de desarrollo.'
        },
        'linux': {
            'title': 'Soluciones en la Nube',
            'body': 'Desde un entorno de TI gestionado localmente, mantenimiento de centros de datos en la nube o administrando servidores y aplicaciones virtuales, podemos ayudarte.'
        },
        'consulting': {
            'title': 'Consultoría',
            'body': 'Analizamos su modelo de negocio, a sus clientes, la competencia y todo lo que juegue un rol fundamental en su proyecto, para que como equipo llevarlo al éxito.'
        },
        'seo': {
            'title': 'Optimización SEO',
            'body': 'Te ayudamos a conseguir más ventas y dinero para su negocio, mejorando la visibilidad de su sitio web en los motores de búsqueda.'
        },
    },
    'whyus': {
        'title': '<span>Destacados</span>¿Por qué elegirnos?',
        'teams': {
            'title': 'Equipos exclusivos',
            'body': 'Asignamos un equipo para trabajar de forma activa y exclusiva en tu proyecto.'
        },
        'tasks': {
            'title': 'Priorización de tareas',
            'body': 'Formarás parte del equipo de trabajo, garantizando los detalles necesarios de cada requerimiento.'
        },
        'agile': {
            'title': 'Tenemos mentalidad ágil',
            'body': 'Trabajamos con metodologías ágiles que garantizan entregas de funcionalidades en cada sprint de trabajo.'
        },
        'dailies': {
            'title': 'Reuniones diarias',
            'body': 'Reuniones diarias con el equipo de desarrollo para comprobar el estado de cada tarea.'
        },
        'project': {
            'title': 'Estatus de Proyecto',
            'body': 'Validación continua del proyecto, incluyendo sus criterios como propietario del producto.'
        },
    },
    'team': {
        'title': '<span>El equipo</span>Conócenos',
        'phrase': 'Las caras detras de nuestra firma',
        'asd': {
            'name': 'Asdrúbal Chirinos',
            'role': 'CEO, Gerente de desarrollo',
            'bio': 'Liderando equipos hacia el éxito. Consultor  y desarrollador Full Stack',
        },
        'ger': {
            'name': 'German Cardozo',
            'role': 'Experto UNIX/Linux',
            'bio': 'Especialista en virtualización y desarrollo. Consultor en desarrollo y automatización.',
        },
        'fab': {
            'name': 'Fabiola Márquez',
            'role': 'Gerente de reclutamiento',
            'bio': 'Reclutador de IT, especialista en adquisición de talentos',
        },
        'bea': {
            'name': 'Beatriz Márquez',
            'role': 'Gerente de negocios',
            'bio': 'Especialista en la gestión y seguimiento de proyectos',
        }
    },
    'contact': {
        'title': '<span>Comunícate</span>con nosotros',
        'phrase': 'Suficiente de nosotros, ahora te queremos escuchar a ti, envíenos un mensaje y le responderemos al momento.',
        'body': '',
        'name': 'Nombre completo',
        'email': 'Correo electrónico',
        'subject': 'Asunto',
        'message': 'Escribe tu mensaje',
        'info': 'Información de contacto',
        'more' :'Déjenos saber más de ti, no dudes en contactarnos en cualquier momento.',
        'officialEmail':'Correo oficial',
        'phone': 'Teléfono',
        'address': 'Nuestra Ubicación',
        'send': 'Enviar Mensaje',
        'thanks': {
            'title': 'Gracias por contactarnos',
            'body': 'Pronto nos estaremos contactando contigo.'
        },
        'required': "Este campo es obligatorio."
    }
};

i18njs.add('en', 'root', en_locales);
i18njs.add('es', 'root', es_locales);

(function ($) {
    "use strict";
    $(document).on('ready', function () {


		/*====================================
			Search Jquery JS
		======================================*/
        $('.search a').on("click", function () {
            $('.search-form').toggleClass('s-active');
        });
        $('.search-form i').on("click", function () {
            $('.search-form').toggleClass('active');
        });

		/*====================================
			Sidebar Menu JS
		======================================*/
        $('.icon-bar').on("click", function () {
            $('.sidebar-quick').toggleClass('active');
        });
        $('.sidebar-quick .remove').on("click", function () {
            $('.sidebar-quick').toggleClass('active');
        });

		/*====================================
			Mobile Nav JS
		======================================*/
        // $('.menu').slicknav({
        //     prependTo: ".mobile-nav",
        //     label: '',
        //     duration: 500,
        //     easingOpen: "easeOutBounce",
        // });

        /* News Single Slider */
        $('.single-news.slider .slider-active').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 600,
            arrows: false,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            dots: true,
            draggable: true,
        });

        /* Partner Slider */
        $('.partner-slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            arrows: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            pauseOnHover: false,
            dots: false,
            draggable: true,
            cssEase: 'linear',
            responsive: [{
                breakpoint: 780,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 340,
                settings: {
                    slidesToShow: 2,
                }
            },
            ]
        });

		/*====================================
			Isotop And Masonry Active JS
		======================================*/
        // $('.isotop-active').masonry({
        //     // options
        //     itemSelector: '.grid-item',
        // });

        // if ($.fn.isotope) {
        //     $(".isotop-active").isotope({
        //         filter: '*',
        //     });

        //     $('.project-nav li').on('click', function () {
        //         $(".project-nav li").removeClass("active");
        //         $(this).addClass("active");

        //         var selector = $(this).attr('data-filter');
        //         $(".isotop-active").isotope({
        //             filter: selector,
        //             animationOptions: {
        //                 duration: 750,
        //                 easing: 'easeOutCirc',
        //                 queue: false,
        //             }
        //         });
        //         return false;
        //     });
        // }

		/*====================================
			Counter Js
		======================================*/
        // $('.counter').counterUp({
        // 	time: 1000
        // });

		/*======================================
			Parallax JS
		======================================*/
        // $(window).stellar({
        //     responsive: true,
        //     positionProperty: 'position',
        //     horizontalOffset: 0,
        //     verticalOffset: 0,
        //     horizontalScrolling: false
        // });

		/*=====================================
			Video Popup JS
		======================================*/
        // $('.video-play').magnificPopup({
        //     type: 'iframe',
        //     removalDelay: 300,
        //     mainClass: 'mfp-fade'
        // });


		/*====================================
			Footer Height FIX JS
		======================================*/
        $(window).trigger("scroll");
        $(window).trigger("resize");

        var $window = $(window);

        $('<div class="footer-height"></div>').insertAfter('#footer-fixed');

        $window.on('resize', function () {
            $('.footer-height').css('height', $('#footer-fixed').height());
        })
            .trigger('resize');

        if ($('#footer-fixed').length) {

        }

		/*====================================
			Scrool Up JS
		======================================*/
        $.scrollUp({
            scrollName: 'scrollUp',      // Element ID
            scrollDistance: 100,         // Distance from top/bottom before showing element (px)
            scrollFrom: 'top',           // 'top' or 'bottom'
            scrollSpeed: 200,            // Speed back to top (ms)
            animationSpeed: 200,         // Animation speed (ms)
            scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
            scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
            scrollText: ["<i class='fa fa-long-arrow-up'></i>"], // Text for element, can contain HTML
            scrollTitle: false,          // Set a custom <a> title if required.
            scrollImg: false,            // Set true to use image
            activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647           // Z-Index for the overlay
        });

		/*====================================
			Textillate JS
		======================================*/
        // $('.tlt').textillate({
        //   // the default selector to use when detecting multiple texts to animate
        //   selector: '.texts',
        //   loop: true,
        //   minDisplayTime: 2000,
        //   autoStart: true,
        //   type: 'char'
        // });
    });
    /*====================================
        Others JS
    ======================================*/
    $('.a').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 70
        }, 1000);
        e.preventDefault();
    });

    $('a.scroll').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, function () {
            if ($('.toggler')[0].checked) {
                $('.toggler')[0].checked = false;
            }
        });
    });

    document.addEventListener('scroll', function (event) {
        $('.hamburger').toggleClass('scrolled', $(document).scrollTop() < $('.header').height());
    }, true);



    /*====================================
        Language
    ======================================*/

    var lang = Cookies.get('lang');

    $("[data-reload]").click(function (e) {
        e.preventDefault();        
        lang = lang == 'en' ? 'es' : 'en';        
        Cookies.set('lang', lang);
        window.location.reload(false);
    })

    if(!lang) {
        var lang = navigator.language.split('-')[0];
        Cookies.set('lang', lang);
        console.log('langl', lang);
    }

    i18njs.setLang(lang);

    $("[data-i18n]").each(function (index, value) {
        var label = $(value).data("i18n");
        $(value).html(i18njs.get('root.' + label));
    })

    $("input").each(function (index, value) {        
        $(value).data("msg-required", i18njs.get('root.contact.required'));
    })


    $("[data-i18n-placeholder]").each(function (index, value) {
        var label = $(value).data("i18n-placeholder");
        $(value).attr('placeholder', i18njs.get('root.' + label));
    })

    /*====================================
        Submit Form
    ======================================*/

    $("#submitButton").click(function (e) {
        e.preventDefault();

        if ($("#emailForm").valid())
            $.ajax({
                contentType: 'application/x-www-form-urlencoded',
                type: 'POST',
                url: 'https://formspree.io/mlepkenl',
                data: ($("#emailForm")).serialize(),
                beforeSend: function () {
                    // var btn = $('#btnContactUs');
                    // btn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>enviando...');
                    // btn.prop('disabled', true);
                },
                success: function (response) {
                    if (response.ok) {
                        $("#emailForm").fadeOut("slow", function () {
                            $("#thanksForm").fadeIn();
                        });
                    } else {
                        alert("Something went wrong please retry")
                    }
                },
                complete: function () {
                    $("#emailForm").fadeOut("slow", function () {
                        $("#thanksForm").fadeIn();
                    });
                },
                dataType: 'json'
            });
    });


    /*====================================
        Handlebar
    ======================================*/


    /*====================================
        Preloader JS
    ======================================*/
    $(window).load(function () {
        $('.preloader-main').fadeOut('slow', function () {
            $(this).remove();
        });
    });


})(jQuery);