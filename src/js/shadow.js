(function($) {
	$.widget("test.shadow", {
		options : {
			color : "#666",
			size : "5px",
			position : {
				left : "5px",
				top : "5px"
			}
		},
		_create : function() {
			var o_element = this.element;
			var o_options = this.options;
			o_element.bind("mouseover", function() {
				var s_parameter = o_options.position.top + " "
						+ o_options.position.left + " " + o_options.size + " "
						+ o_options.color;
				o_element.css("-webkit-box-shadow", s_parameter);
				o_element.css("-moz-box-shadow", s_parameter);
				o_element.css("box-shadow", s_parameter);
			});
			o_element.bind("mouseout", function() {
				o_element.css("-webkit-box-shadow", "none");
				o_element.css("-moz-box-shadow", "none");
				o_element.css("box-shadow", "none");
			});
		},
		destroy : function() {
			var o_element = this.element;
			o_element.unbind("mouseover");
			o_element.unbind("mouseout");
		},
		_setOption : function(option, value) {
			$.Widget.prototype._setOption.apply(this, arguments);
		}
	});
})(jQuery);