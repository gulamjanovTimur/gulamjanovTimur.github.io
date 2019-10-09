<?php
    if(!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])){
        
        $headers = 'From: Кротов Роман'.
                   'Reply-to: gulamjanov4@gmail.com';
            
        $letter = 'Данные сообщения: ';
        $letter .='Имя: '.$_POST['name']. '\r\n';
        $letter .='Email: '.$_POST['email']. '\r\n';
        $letter .='Телефон: '.$_POST['phone']. '\r\n';
        $letter .='Сообщение: '.$_POST['message']. '\r\n';
        if(mail("gulamjanov4@gmail.com", "Новое сообщение: ", $letter)){
            header('Location:/thankyou');
        }else{
            header('Location:/');
        }
    }else{
        header('Location:/');
    }

?>