<?php ini_set('display_errors', 1); ?>
<?php
require 'vendor/autoload.php';

use \Mailjet\Resources;

$mj = new \Mailjet\Client('5c76a61acc090571684090790ae67632', 'e43f52a9cf20f6058765bf45eadebf88', true, ['version' => 'v3.1']);

if (
    $_POST &&
    $_POST['name'] &&
    $_POST['email'] &&
    $_POST['subject'] &&
    $_POST['message']
) {

    $fullName = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $body = [
        'Messages' => [
            [
                'From' => [
                    'Email' => "webmasters@asdsoftlabs.com",
                    'Name' => "Webmaster"
                ],
                'To' => [
                    [
                        'Email' => "achirinos@asdsoftlabs.com",
                        'Name' => "Asdrúbal Chirinos"
                    ]
                ],
                'Subject' => "Mensaje para Asdsoft Labs",
                'HTMLPart' => "<p>Persona contacto:" . $fullName . "</p>
                               <p>" . $email . "</p>
                               <p>Asunto:" . $subject . "</p>
                               <p>Mensaje:" . $message . "</p>",
                'CustomID' => "AppGettingStartedTest"
            ]
        ]
    ];
    $response = $mj->post(Resources::$Email, ['body' => $body]);
    
    //$response->success() && var_dump($response->getData());

    if($response->success()) {
        echo json_encode(array('message' => 'Sent successfully', 'code' => 200), JSON_FORCE_OBJECT);
    } 
    else {
        echo json_encode(array('message' => 'Message not sent', 'code' => 500), JSON_FORCE_OBJECT);
    }

} else {
    echo json_encode(array('message' => 'Invalid Request', 'code' => 400), JSON_FORCE_OBJECT);
}