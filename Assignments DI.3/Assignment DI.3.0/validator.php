<?php
            function libxml_display_error($error)
            {
                $return = "<br/>\n";
                switch ($error->level) {
                    case LIBXML_ERR_WARNING:
                        $return .= "<b>Warning $error->code</b>: ";
                        break;
                    case LIBXML_ERR_ERROR:
                        $return .= "<b>Error $error->code</b>: ";
                        break;
                    case LIBXML_ERR_FATAL:
                        $return .= "<b>Fatal Error $error->code</b>: ";
                        break;
                }
              $return .= trim($error->message);
                if ($error->file) {
                    $return .=    " in <b>$error->file</b>";
                }
                $return .= " on line <b>$error->line</b>\n";

                return $return;
            }

            function libxml_display_errors() {
                $errors = libxml_get_errors();
                foreach ($errors as $error) {
                    print libxml_display_error($error);
                }
                libxml_clear_errors();
            }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Validation by XML Schema</title>
        <script>
        function clip(lastname, date) {
            var qText = "(" + lastname +", " + date + ").";
            var input = document.createElement('input');
            input.setAttribute('value', qText);
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input)
        }
        </script>
        <style>
            body{
                background-color:#ededed;
                font-family: 'Poppins', sans-serif;
            }
            b{
                font-size:24px;
            }
            div{
                color:#1f1f1f;
                text-decoration:none;
                margin-top:10px;
                margin-bottom:10px;
                padding:10px;
            }
        </style>
        
    </head>
    <body>
<?php
        libxml_use_internal_errors(true);
        $file = "booksXML2.xml";
        $xml = new DOMDocument();
        $xml->load($file); 
        if (!$xml->schemaValidate('booksCanon.xsd')) {
             print '<b>DOMDocument::schemaValidate() Generated Errors!</b>';
             libxml_display_errors();
        } else {
            echo "<h1 id='big'>Books</h1>";
            $feed = simplexml_load_file($file);
            $counter = 0;
            foreach($feed as $item){
                print utf8_decode("<div onclick='clip(\"{$item->authors->author->lastname}\",\"{$item->publisher->year}\")' id='".$counter++ ."'>{$item->authors->author->lastname}, ".substr("{$item->authors->author->firstname}",0,1).".  
                ({$item->publisher->year}).  <i>{$item->title}</i>.<br> {$item->publisher->place}, {$item->publisher->name}</div>");
            }
            echo "<br><b>This document is valid!\n</b>";
        }

?>


    </body>
</html>