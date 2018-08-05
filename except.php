
<?php

//错误处理代码
if(!fopen('2.thmll')){
    error_fn();
}
function error_fn($err,$errs){
    echo "<b>Error:</b> [$err] $errs<br>";   //显示对应行号和错误的字符串
    echo "Ending Script";
    die();      //错误执行到这里，后面代码不会在执行
}
//设置错误操作方法
set_error_handler('error_fn',E_USER_WARNING);
if(2){
//    判断错误原因，报告错误级别
    trigger_error('1 不能大于２',E_USER_WARNING);
}
echo $test;    //未定义的变量



//异常处理代码
function exc(){
    if (2>1){               //条件判断
        throw new Exception('2是大于１的');  //抛出异常
    }
    return true;
}
try{
    exc();      //试着判断代码，若出错则抛出一个异常
}
catch (Exception $obj){       //捕获异常，报告错误信息
    echo $obj->getMessage();
}


//创建类处理漏掉的异常处理
class xce extends Exception{
    public function errorMessage(){     //显示错误代码对应行号、所在文件、字符串
        $errorMsg = 'Error on line '.$this->getLine().' in '.$this->getFile()
            .': <b>'.$this->getMessage().'</b> is not a valid E-Mail address';
        return $errorMsg;
    }
//    }
}
$email = "someone@example...com";    //此例以验证邮箱作为理解异常处理的方法
try{
    //filter_var()函数的强大，自行百度。
    if (filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE){
        throw new xce($email);
    }
}
catch (xce $obj)
{
    echo $obj->errorMessage();
}

?>
