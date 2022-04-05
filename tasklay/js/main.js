"use strict";
jQuery(window).on('load', function () {
  /* PRELOADER*/
  jQuery(".preloader-outer").delay(500).fadeOut();
  jQuery(".tk-preloader").delay(200).fadeOut("slow");

  /* MOBILE MENU*/
  function collapseMenu(){
      if (jQuery(window).width() < 992) {
          jQuery('.menu-item-has-children > a, .page_item_has_children > a').on('click', function() {
          jQuery(this).closest('li').toggleClass('tk-open-menu');
          jQuery(this).next().slideToggle(300);
      });
    }
  }
  collapseMenu();

  /* SIDE NAVIGATION */
  jQuery('.tk-filtermenu').on('click',function(){
    jQuery(this).parents('body').addClass('tk-open-filtermenu')
  });
  jQuery('.tk-closefilter').on('click',function(){
    jQuery(this).parents('body').removeClass('tk-open-filtermenu')
  });
  // Feedback search slider
  let tk_professionolslider = document.querySelector(".tk-professionolslider");
  if (tk_professionolslider !== null) {
    var splide = new Splide(".tk-professionolslider", {
      type   : 'loop',
      perPage: 4,
      perMove:1,
      arrows:true,
      pagination: false,
      gap:24,
      breakpoints: {
        1400: {
          perPage: 3,
        },
        991: {
          perPage: 2,
          focus  : 'center',
        },
        575: {
          perPage:2,
          gap:20,
          arrows:false,
          pagination: true,
          focus  : 'center',
        },
        480: {
          perPage:1,
          arrows:false,
          pagination: true,
          focus  : 'center',
        },
      }
    
    });
    splide.mount();
  }

  // feedback slider
  let tk_feedbackslider = document.querySelector("#tk-feedbackslider");
  if (tk_feedbackslider !== null) {
    var splide = new Splide(".tk-feedbackslider", {
      type   : 'loop',
      perPage: 3,
      perMove: 1,
      autoplay: true,
      arrows: false,
      pagination: false,
      gap: 24,
      interval: 3000,
      autoWidth: true,
      breakpoints: {
        1199: {
          perPage: 2,
        },
        991: {
          perPage:2,
          pagination: false,
        },
        767: {
          perPage:1,
          arrows:false,
          pagination: true,
        },
        480: {
          perPage:1,
          arrows:false,
          pagination: true,
          autoWidth: false,
          focus  : 'center',
          gap: 12,
        },
      }
    });
    splide.mount();
  }

  // Service detail sync slider
  var tk_splide = document.getElementById('tk_splide')
  if (tk_splide != null) {
    var secondarySlider = new Splide( '#tk_splidev2', {
      rewind      : true,
      fixedWidth  : 70,
      fixedHeight : 70,
      isNavigation: true,
      gap         : 10,
      pagination  : false,
      arrows     : false,
      focus  : 'center',
      updateOnMove: true,
    } ).mount();
    var primarySlider = new Splide( '#tk_splide', {
      type       : 'fade',
      pagination : false,
      cover      : true,
    } )
    primarySlider.sync( secondarySlider ).mount(); 
  }

  // Freelancer List slider
  var tk_searchslide = document.getElementById("tk-searchslide");
  if (tk_searchslide != null) {
    var splide = new Splide(".tk-searchslide", {
      type   : 'loop',
      perPage: 1,
      focus: "center",
      pagination: false,
    });
    splide.mount();
  }

  // Popular slider
  var tk_popularservices = document.getElementById("tk-popularservices");
  if (tk_popularservices != null) {
    var splide = new Splide("#tk-popularservices", {
      type   : 'loop',
      perPage: 4,
      perMove: 1,
      arrows:true,
      pagination: false,
      gap: 24,
      breakpoints: {
        1399: {
          perPage: 3,
        },
        1199: {
          perPage: 3,
        },
        991: {
          perPage: 2,
        },
        480: {
          perPage: 1,
          gap:0,
        },
      }
    });
    splide.mount();
  }

  // Popular slider
  var tk_trendingserviceslider = document.getElementById("tk-trendingserviceslider");
  if (tk_trendingserviceslider != null) {
    var splide = new Splide("#tk-trendingserviceslider", {
      type   : 'loop',
      perPage: 3,
      perMove: 1,
      arrows:true,
      pagination: false,
      gap: 24,
      breakpoints: {
        1199: {
          perPage: 2,
        },
        767: {
          perPage: 1,
          gap:0,
        },
      }
    });
    splide.mount();
  }

  // FAQS slider
  var tk_faqsslider = document.getElementById("tk-faqsslider");
  if (tk_faqsslider != null) {
    var splide = new Splide("#tk-faqsslider", {
      type   : 'loop',
      perPage: 4,
      perMove: 1,
      arrows:true,
      pagination: false,
      gap:20,
      breakpoints: {
        1400: {
          perPage: 3,
        },
        991: {
          perPage: 2,
        },
        575: {
          perPage:2,
          gap:20,
          arrows:false,
          pagination: true,
          focus  : 'center',
        },
        480: {
          perPage:1,
          arrows:false,
          pagination: true,
          focus  : 'center',
        },
      }
    });
    splide.mount();
  }

  // VenoBox Video Popup
  let venobox = document.querySelector(".tk-themegallery");
  if (venobox !== null) {
    jQuery(".tk-themegallery").venobox({
      spinner : 'cube-grid',
    });
  }

 // input asteric
  jQuery('.tk-placeholder').on('click',function(){
    jQuery(this).siblings('.tk-themeinput').focus();
  });
  jQuery('.tk-themeinput').on('input',function(){
    jQuery(this).siblings('.tk-placeholder').hide();
    if (jQuery(this).val().length == 0)
    jQuery(this).siblings('.tk-placeholder').show();
  });

  jQuery('.tk-themeinput').on('blur',function() {
    if (jQuery(this).val().length == 0)
      jQuery(this).siblings('.tk-placeholder').show();
  });

  jQuery('.tk-themeinput').blur();
  var tk_formcontrol = document.querySelector('.tk-themeinput')
  if(tk_formcontrol !== null){
    if (jQuery('.tk-themeinput').val().length < 0){
      jQuery('.tk-themeinput').siblings('.tk-placeholder').hide();
    }
    if (jQuery('.tk-themeinput').val().length == 0){
      jQuery('.tk-themeinput').siblings('.tk-placeholder').show();
    }
  }

  // header icon button click
  jQuery('.tk-formicon').on('click',function(){
    jQuery(this).closest('.tk-navbar').addClass('tk-searchopen')
  });

  jQuery('.tk-formcloseicon').on('click',function(){
    jQuery(this).closest('.tk-navbar').removeClass('tk-searchopen')
  });

  // active class toggle on hover
	setTimeout(function(){
		jQuery('.tk-blog-tags, .tk-faq-category').on('mouseover',function() {
			var tk_className = jQuery(this).attr('class');
			var tk_hoverClassName = tk_className.split(' ')[0]
			var tk_ActiveClass = tk_hoverClassName + '-active';
			jQuery('.' + tk_hoverClassName).removeClass(tk_ActiveClass)
			jQuery(this).addClass(tk_ActiveClass);
		});
	}, 0);

  var config = {
    '#tk-selectv3'  : {allowClear: true},
    '#tk-selectv4'  : {allowClear: true},
    '#tk-selectv2'  : {allowClear: true, minimumResultsForSearch: Infinity},
    '.tk-selectprice':{width: '196' , minimumResultsForSearch: Infinity},
	}

  jQuery('[tk-data-placeholderinput]').each(function(item){
    var data_placeholder = jQuery('[tk-data-placeholderinput]')[item]
    var tk_id = jQuery(data_placeholder).attr('id')
    var tk_placeholder = jQuery(data_placeholder).attr('tk-data-placeholderinput')
    jQuery('#'+tk_id).on('select2:open', function(e) {
      jQuery('input.select2-search__field').prop('placeholder', tk_placeholder);
    });
  });

	for (var selector in config) {
		jQuery(selector).select2(config[selector]);
	}

  jQuery('select').on('select2:open', function (e) {
    jQuery('.select2-results__options').mCustomScrollbar('destroy');
    setTimeout(function () {
      jQuery('.select2-results__options').mCustomScrollbar();
    }, 0);
  });

  // Particles
  var particle = document.getElementById("tk-particle");
    if (particle !== null) {
      particlesJS("tk-particle", {
      particles: {
      number: {
        value: 40,
      },
      color: {
        value: ["#fff"],
      },
      "opacity": {
        "value": 0.45,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      line_linked: {
        enable: false,
      },
      size: {
        value: 3.5,
        random: true,
      },

      },
    });
  }

  // Tippy Start
  let tk_tippy = document.querySelector(".tk-theme-tooltip");
  if (tk_tippy !== null) {
    tippy(".tk-theme-tooltip", {
      content: "Ad to compare",
      animation: "scale",
    });
  }

  //show more button
  jQuery(".tk-blog-showmore").on('click', function(){
    jQuery('.tk-button-disapear').show();
    jQuery('.tk-button-disapear').removeClass('out').addClass('active');
    jQuery(".tk-blog-showmore").parent("li").hide();
  });

  // dropdown 
  jQuery('.tk-dropdown_list a').on('click', function(){
    jQuery(this).closest('.tk-dropdown_list').addClass('d-none')
    jQuery(this).closest('.tk-dropdown_list').prev().prev('.tk-input').addClass('d-none')
    jQuery(this).closest('.tk-dropdown_list').prev('.tk-backdropdown').removeClass('d-none')
    jQuery(this).closest('.tk-dropdown_list').next().removeClass('d-none')
  });

  jQuery('.tk-backdropdown a').on('click', function(e){
    jQuery(this).closest('.tk-backdropdown').addClass('d-none')
    jQuery(this).closest('.tk-backdropdown').prev().removeClass('d-none')
    jQuery(this).closest('.tk-backdropdown').next().removeClass('d-none')
    jQuery(this).closest('.tk-backdropdown').next().next().addClass('d-none')
    e.stopPropagation()
  });

  // toogle active class on form banner
  jQuery(window).on('click', function(e) {
    if (!jQuery(e.target).is('.tk-dropdownholder')) {
      jQuery('.tk-dropdownholder .collapse').collapse('hide');	       
    }
  });

  jQuery('.tk-dropdownholder .tk-input, .tk-dropdown_list').on('click', function(e) {
    e.stopPropagation()
  });

  //read more
  var tk_categoriesfilter = document.querySelector(".tk-categoriesfilter");
  if (tk_categoriesfilter !== null) {
    tk_categoriesfilter = {
      collapsedHeight: 250,
      moreLink: '<a href="javascript:void(0);" class="tk-readmorebtn">Show more</a>',
      lessLink: '<a href="javascript:void(0);" class="tk-readmorebtn">Show Less</a>',
    };
    jQuery('.tk-categoriesfilter').readmore(tk_categoriesfilter);
  }

  var tk_showaditionals = document.querySelector(".tk-additionalservices");
  if (tk_showaditionals !== null) {
    tk_showaditionals = {
      collapsedHeight: 920,
      moreLink: '<a href="javascript:void(0);" class="tk-readmorebtn"><span class="tk-loader">Load more</span></a>',
      lessLink: '<a href="javascript:void(0);" class="tk-readmorebtn">Show Less</a>',
    };
    jQuery('.tk-additionalservices').readmore(tk_showaditionals);
  }

  var tk_showcategories = document.querySelector("#tk-exploremore");
  if (tk_showcategories !== null) {
    tk_showcategories = {
      collapsedHeight: 205,
      moreLink: '<a href="javascript:void(0);" class="tk-readmorebtnv2">Show All</a>',
      lessLink: '<a href="javascript:void(0);" class="tk-readmorebtnv2">Show Less</a>',
    };
    jQuery('#tk-exploremore').readmore(tk_showcategories);
  }

  // liked class togle
  jQuery(function() {
		jQuery('.tk-like').on('click', function(){
		   jQuery(this).toggleClass('tk-liked');
		});
	});

  // range mater collapse
  jQuery(".tk-rangevalue").on('click', function () {
    jQuery('#rangecollapse').collapse('show');
  });

  // get child element text parrent text
  jQuery(document).on('click', '.tk-pakagelist li', function(e){
	  e.preventDefault();
		var title = jQuery(this).find('span').text();
		var price = jQuery(this).find('em').text();
		var img = jQuery(this).find('img').attr('src');

    jQuery('.tk-pakagedetail .tk-pakageinfo h6').html(title);
		jQuery('.tk-pakagedetail .tk-pakageinfo h4').html(price);
		jQuery('.tk-pakagedetail img').attr('src', img);
    
    if ( jQuery(this).hasClass('tk-active') ) {
      jQuery(this).removeClass('tk-active');
    } else {
      jQuery('.tk-pakagelist li').removeClass('tk-active');
      jQuery(this).addClass('tk-active');    
    }
	});

  // range slider
  var stepsSlider = document.getElementById('tk-rangeslider');
  if(stepsSlider !== null){
    var input0 = document.getElementById('tk-min-value');
    var input1 = document.getElementById('tk-max-value');
    var inputs = [input0, input1];
    noUiSlider.create(stepsSlider, {
        start: [200, 400],
        connect: true,
        range: {
          'min': 0,
          'max': 600
      },
        format: {
          to: (v) => parseFloat(v).toFixed(0),
          from: (v) => parseFloat(v).toFixed(0),
          suffix: ' (US $)'
      },
    });

    stepsSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });

    // Listen to keydown events on the input field.
    inputs.forEach(function (input, handle) {
      input.addEventListener('change', function () {
          stepsSlider.noUiSlider.setHandle(handle, this.value);
      });
      input.addEventListener('keydown', function (e) {
        var values = stepsSlider.noUiSlider.get();
        var value = Number(values[handle]);
        var steps = stepsSlider.noUiSlider.steps();
        var step = steps[handle];
        var position;
        switch (e.which) {
          case 13:
            stepsSlider.noUiSlider.setHandle(handle, this.value);
            break;
          case 38:
            position = step[1];
            // false = no step is set
            if (position === false) {
                position = 1;
            }
            if (position !== null) {
                stepsSlider.noUiSlider.setHandle(handle, value + position);
            }
            break;
          case 40:
            position = step[0];
            if (position === false) {
                position = 1;
            }
            if (position !== null) {
                stepsSlider.noUiSlider.setHandle(handle, value - position);
            }
            break;
          }
      });
    });
  }

  // Additional feature checkbox
  jQuery('.tk-additionalservicesvtwo .tk-form-checkbox .form-check-input').on('change',function() {
    if(jQuery(this).prop("checked") == true){
        jQuery(this).parents("li").addClass("tk-active");
     }else if(jQuery(this).prop("checked") == false){
        jQuery(this).parents("li").removeClass("tk-active");
    }
  });

  // INPUT COUNTER ON CLICK
  var tkInputIncrement = document.querySelector('.tk-input-increment')
  if (tkInputIncrement !== null) {
    jQuery(document).on('click','.tk-input-increment',function(e) {
        var $input = $(this).closest('.tk-vlaue-btn').find('.tk-input-number');
        var val = parseInt($input.val(), 10);
        $input.val(val + 1);
    });
    
    jQuery(document).on('click','.tk-input-decrement',function(e) {
      var $input = jQuery(this).closest('.tk-vlaue-btn').find('.tk-input-number');
      var val = parseInt($input.val(), 10);
      if (val >= 1) {
          $input.val(val - 1);
      }
    })
  }
});