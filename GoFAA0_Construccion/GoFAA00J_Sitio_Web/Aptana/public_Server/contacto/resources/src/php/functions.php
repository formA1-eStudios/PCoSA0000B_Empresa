<?php

function redirectContactWithError($error)
{
    $_SESSION['_contact_form_error'] = $error;

    header('Location: '.$_SERVER['HTTP_REFERER']);
    echo "Error: ".$error;
    die();
}

function redirectContactSuccess()
{
    $_SESSION['_contact_form_success'] = true;

    header('Location: '.$_SERVER['HTTP_REFERER']);
    echo "¡Tu mensaje ha sido enviado con éxito!";
    die();
}

function redirectProposalWithError($error)
{
    $_SESSION['_proposal_form_error'] = $error;

    header('Location: '.$_SERVER['HTTP_REFERER']);
    echo "Error: ".$error;
    die();
}

function redirectProposalSuccess()
{
    $_SESSION['_proposal_form_success'] = true;

    header('Location: '.$_SERVER['HTTP_REFERER']);
    echo "¡Tu mensaje ha sido enviado con éxito!";
    die();
}
