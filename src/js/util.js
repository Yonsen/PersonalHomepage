/**
 * Created by wu on 2017/2/23.
 */
module.exports = {
    /**
     * 人民币格式化
     */
    RMB: function(num, isSign){
        num = parseFloat(num,10)||0;
        if(typeof num!=='number')return '0.00';
        num = Math.round(num*100)/100;
        num = num.toString();
        var res = '';
        var idx = num.indexOf('.');
        if(idx<0){
            res = num + '.00';
        }else{
            idx++;
            res = num.substring(0,idx);
            var len = num.length;
            for(var i=idx; i<idx+2; i++){
                res += i<len?num.charAt(i):'0';
            }
        }
        return res<0?'0.00':res;
    },
    spinner: function($spinner, opts) {
        opts = opts || {
                min: 1,
                max: 1000,
                step: 1
            };
        opts.step = opts.step || 1;
        opts.min = opts.min==null ? 1 : opts.min;
        opts.max = opts.max==null ? 1000 : opts.max;
        opts.value = opts.value==null ? opts.min : opts.value;
        $("input", $spinner).val(opts.value).data("value", opts.value);
        function setValue($input, step) {
            var _val = $input.data("value"),
                txt = $input.val(),
                val = parseInt(txt.replace(/\D/g, ""), 10);
            val += step;
            val = Math.max(val, opts.min);
            val = Math.min(val, opts.max);
            if(val != txt){
                $input.val(val);
            }
            if (_val != val) {
                $input.data("value", val);
                opts.onChange && opts.onChange.call(opts, $input, val, val>_val);
            }
        }
        $spinner.on("selectstart", ".spinner-minus, .spinner-plus", function(e) {
            return false;
        }).on("click", ".spinner-minus", function(e) {
            setValue($(this).next("input"), -opts.step);
            return false;
        }).on("click", ".spinner-plus", function(e) {
            setValue($(this).prev("input"), opts.step);
            return false;
        }).on("blur", "input", function(e) {
            setValue($(this), 0);
            return false;
        }).on("keydown", "input", function(e) {
            if (13 == e.keyCode) {
                e.preventDefault();
                e.stopPropagation();
                $(this).blur()
            }
        }).on("keyup afterpaste", "input", function(e) {
            if((e.keyCode<37 || e.keyCode>40) && e.keyCode!=8){
                setValue($(this), 0);
            }
            return false;
        });
    }
};