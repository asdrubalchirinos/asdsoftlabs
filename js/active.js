/* =====================================
Template Name: Precon
Author Name: ThemeLamp
Author URI: http://themelamp.com/
Description: Precon is a Multipurpose Business HTML5 Template.
Version:	1.0
========================================*/
import Cookies from 'js-cookie';
import i18njs from 'i18njs';

import '../css/custom/reset.css';
import '../css/custom/style.css';
import '../css/custom/responsive.css';
import '../css/custom/skin1.css';
import '../css/custom/menu.css';

var en_locales = {
    'menu': {
        'up': 'Top',
        'about': 'About',
        'services': 'Services',
        'whyus': 'Why Us',
        'approach': 'Approach',
        'team': 'Team',
        'work': 'Work',
        'contact': 'Contact',
        'lang': 'Español'
    },
    'aboutus': {
        'header': "About Us",
        'title': "A <span>boutique</span> team for your product",
        'body': "Senior people, direct communication, no layers. We bridge business and code for teams building real products—web and mobile, IT talent and AI automations, always with human oversight."
    },
    'work': {
        'title': '<span>Selected work</span>What we ship',
        'phrase': 'Real products you can try today',
        'p1': {
            'title': 'P1 Express App',
            'body': 'Our minimalist planning app: offline-first, zero dependencies, philosophy in code. A real example of Personal Software—tools shaped to the person, not the other way around.'
        }
    },
    'footer': {
        'blog': 'Our take on AI &amp; software: <a class="nowrap" href="https://www.codigoergosum.com/blog/" target="_blank" rel="noopener">Código Ergo Sum</a>'
    },
    'action': {
        'title': 'Have a product worth building? Let\'s talk.',
        'msg': 'Let us know more about your idea and we will bring it to life!'
    },
    'services': {
        'title': '<span>Capabilities</span>What we do',
        'phrase': 'We Analyze, Design, Build, Test & Deploy',
        'dev': {
            'title': 'Web/Mobile Development',
            'body': 'We design, build and ship web and mobile products with modern stacks, clear delivery and code your team can own.'
        },
        'design': {
            'title': 'UX/UI & Web Design',
            'body': 'Interfaces that guide users to action: research, wireframes and visual design focused on conversion, not just looks.'
        },
        'recruting': {
            'title': 'IT Recruiting',
            'body': 'We source, screen and manage the right tech talent for your team, from developers to specialists.'
        },
        'seo': {
            'title': 'SEO & AI Search Visibility',
            'body': 'Get found on Google and in AI answers. Technical SEO, content structure and tracking that turns visibility into leads.'
        },
        'ai': {
            'title': 'AI Agents & Automations',
            'body': 'Chatbots, lead qualification and workflow automations integrated into your tools, with human oversight on every critical step.'
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
        'ai': {
            'title': 'AI-Assisted Delivery',
            'body': 'We use AI to ship faster; architecture, security and QA stay under senior human review.'
        },
        'project': {
            'title': 'Project Checks',
            'body': 'Ongoing validation of the project, including your criteria as a <span>product owner</span>.'
        },
    },
    'approach': {
        'title': '<span>Our approach</span>We bridge business and code',
        'phrase': 'Between those who dream and those who build',
        'purpose': {
            'title': 'Purpose first',
            'body': 'We start with why. Every feature traces back to a real business goal—not a wish list.'
        },
        'bridge': {
            'title': 'Vision meets execution',
            'body': "We connect stakeholders and developers so ideas don't get lost between slides and code."
        },
        'together': {
            'title': 'Business and code, together',
            'body': 'Aligned teams, shared purpose, and products that move the business forward.'
        },
    },
    'team': {
        'title': '<span>Team</span>Get to know us',
        'phrase': 'Meet the faces of our organization',
        'asd': {
            'name': 'Asdrúbal Chirinos',
            'role': 'CEO & Founder',
            'bio': 'Web Development Coach. Leading teams to success. Full Stack Developer',
        },
        'fab': {
            'name': 'Fabiola Márquez',
            'role': 'Talent Lead',
            'bio': 'IT Recruiter, Talent Acquisition Specialist, Head Hunter',
        },
        'bea': {
            'name': 'Beatriz Márquez',
            'role': 'Business Lead',
            'bio': 'Business and Project Management consultant',
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
        'required': "This field is required.",
        'error': "Something went wrong, please retry."
    }
};

var es_locales = {
    'menu': {
        'up': "Inicio",
        'about': 'Nosotros',
        'services': 'Servicios',
        'whyus': 'Por qué elegirnos',
        'approach': 'Enfoque',
        'team': 'Equipo',
        'work': 'Proyectos',
        'contact': 'Contacto',
        'lang': 'English'
    },
    'aboutus': {
        'header': "Sobre nosotros",
        'title': "Un equipo <span>boutique</span> para tu producto",
        'body': "Gente senior, comunicación directa, sin capas intermedias. Conectamos negocio y código con equipos que construyen productos reales—web y móvil, talento IT y automatizaciones con IA, siempre con supervisión humana."
    },
    'work': {
        'title': '<span>Trabajo seleccionado</span>Lo que entregamos',
        'phrase': 'Productos reales que puedes probar hoy',
        'p1': {
            'title': 'P1 Express App',
            'body': 'Nuestra app de planificación minimalista: offline-first, cero dependencias, filosofía en código. Un ejemplo real de Personal Software—herramientas hechas a la persona, no al revés.'
        }
    },
    'footer': {
        'blog': 'Nuestra visión de IA y software: <a class="nowrap" href="https://www.codigoergosum.com/blog/" target="_blank" rel="noopener">Código Ergo Sum</a>'
    },
    'action': {
        'title': '¿Tienes un producto que vale la pena construir? Hablemos.',
        'msg': '¡Queremos conocer tu idea y ayudarte a hacerla realidad!'
    },
    'services': {
        'title': '<span>Servicios</span>Que hacemos',
        'phrase': 'Análisis, diseño, desarrollo, pruebas y despliegue',
        'dev': {
            'title': 'Desarrollo Web/Móvil',
            'body': 'Diseñamos, construimos y entregamos productos web y móviles con stacks modernos, entrega clara y código que tu equipo puede poseer.'
        },
        'design': {
            'title': 'UX/UI y Diseño Web',
            'body': 'Interfaces que guían al usuario a la acción: investigación, wireframes y diseño visual enfocados en conversión, no solo en apariencia.'
        },
        'recruting': {
            'title': 'Reclutamiento IT',
            'body': 'Buscamos, evaluamos y gestionamos el talento tech adecuado para tu equipo, desde desarrolladores hasta especialistas.'
        },
        'seo': {
            'title': 'SEO y Visibilidad en Búsquedas IA',
            'body': 'Sé encontrado en Google y en respuestas de IA: SEO técnico, estructura de contenido y métricas que convierten visibilidad en clientes.'
        },
        'ai': {
            'title': 'Agentes y Automatizaciones IA',
            'body': 'Chatbots, calificación de leads y automatizaciones de flujo integradas a tus herramientas, con supervisión humana en cada paso crítico.'
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
        'ai': {
            'title': 'Entrega asistida por IA',
            'body': 'Usamos IA para entregar más rápido; arquitectura, seguridad y QA quedan bajo revisión humana senior.'
        },
        'project': {
            'title': 'Estatus de Proyecto',
            'body': 'Validación continua del proyecto, incluyendo sus criterios como propietario del producto.'
        },
    },
    'approach': {
        'title': '<span>Nuestro enfoque</span>Conectamos negocio y código',
        'phrase': 'Entre quienes sueñan y quienes hacen',
        'purpose': {
            'title': 'Primero el propósito',
            'body': 'Empezamos por el por qué. Cada funcionalidad responde a una meta real del negocio—no a una lista de deseos.'
        },
        'bridge': {
            'title': 'La visión encuentra la ejecución',
            'body': 'Conectamos a las partes interesadas con los desarrolladores para que las ideas no se pierdan entre diapositivas y código.'
        },
        'together': {
            'title': 'Negocio y código, juntos',
            'body': 'Equipos alineados, propósito compartido y productos que hacen avanzar el negocio.'
        },
    },
    'team': {
        'title': '<span>El equipo</span>Conócenos',
        'phrase': 'Las caras detrás de nuestra firma',
        'asd': {
            'name': 'Asdrúbal Chirinos',
            'role': 'CEO y Fundador',
            'bio': 'Liderando equipos hacia el éxito. Consultor  y desarrollador Full Stack',
        },
        'fab': {
            'name': 'Fabiola Márquez',
            'role': 'Líder de Talento',
            'bio': 'Reclutador de IT, especialista en adquisición de talentos',
        },
        'bea': {
            'name': 'Beatriz Márquez',
            'role': 'Líder de Negocios',
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
        'required': "Este campo es obligatorio.",
        'error': "Algo salió mal, por favor inténtalo de nuevo."
    }
};

i18njs.add('en', 'root', en_locales);
i18njs.add('es', 'root', es_locales);

(function ($) {
    "use strict";
    $(function () {


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
    document.documentElement.lang = lang;

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
        Submit Form (Formspree)
    ======================================*/

    $("#emailForm").on('submit', function (e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        var $form = $(this);
        var $btn = $("#submitButton");
        $btn.prop('disabled', true);

        $.ajax({
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            url: 'https://formspree.io/mlepkenl',
            data: $form.serialize(),
            dataType: 'json',
            success: function (response) {
                if (response && (response.ok === true || response.success === true)) {
                    $form.fadeOut('slow', function () {
                        $('#thanksForm').fadeIn();
                    });
                } else {
                    alert(i18njs.get('root.contact.error') || 'Something went wrong, please retry');
                    $btn.prop('disabled', false);
                }
            },
            error: function () {
                alert(i18njs.get('root.contact.error') || 'Something went wrong, please retry');
                $btn.prop('disabled', false);
            }
        });
    });


    /*====================================
        Handlebar
    ======================================*/


    /*====================================
        Preloader JS
    ======================================*/
    $(window).on('load', function () {
        $('.preloader-main').fadeOut('slow', function () {
            $(this).remove();
        });
    });


})(jQuery);