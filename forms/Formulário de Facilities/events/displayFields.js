function displayFields(form, customHTML) {		var activity = getValue('WKNumState');if (activity == 1 || activity == 0) {customHTML.append('<script>');customHTML.append('$(\'*[name="txt_atend_resol"]\').css(\'display\', \'none\');var closers = $(\'*[name="txt_atend_resol"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="txt_atend_resol"]\').closest(\'.form-field\').css(\'display\', \'none\');}'); customHTML.append('</script>');customHTML.append('<script>');customHTML.append('$(\'*[name="txt_atend_resol"]\').closest("li").hide()');customHTML.append('</script>');customHTML.append('<script>');customHTML.append('$(\'*[name="ava_atendi"]\').css(\'display\', \'none\');var closers = $(\'*[name="ava_atendi"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="ava_atendi"]\').closest(\'.form-field\').css(\'display\', \'none\');}'); customHTML.append('</script>');customHTML.append('<script>');customHTML.append('$(\'*[name="ava_atendi"]\').closest("li").hide()');customHTML.append('</script>');}}