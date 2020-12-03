<!DOCTYPE html>
<html>
    <head>
        <link rel='icon' href='favicon.png' type='image/x-icon'>
        <title>MoCoHacks</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <style>
            /* The element to apply the animation to */
            #background {
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(#060463, #2f043d);
            }
            #landing {
                z-index: 1;
                margin-top: 0%;
                color: #ff9900;
            }
            canvas {
                display: block;
                width: 100vw;
                height: 100vh;
            }
            #particles-js {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 1;
            }
        </style>
    </head>
    <body>
        <div id="background"></div>
        <!--<img src="favicon.png" style="width: 300px;">
        <h1 class="display-4">MoCoHacks.</h1>
        <h1 class="display-4" style="z-index: 3;">
            <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[ "we will return soon.", "stay safe!", "see you soon!", "we&#39;ll be back" ]'></span>
        </h1>-->
        <center>
            <div id="landing">
                <img src="favicon.png" style="width: 300px;">
                <h1 class="display-4">MoCoHacks.</h1>
                <h1 class="display-4" style="z-index: 3;">
                    <span
                    class="txt-rotate"
                    data-period="2000"
                    data-rotate='[ "we will return soon.", "stay safe!", "see you soon!", "we&#39;ll be back" ]'></span>
                </h1>
                <br>
                <!--<u><h1><a href="https://bank.hackclub.com/donations/start/mocohacks" style="color: #ff9900;">Donate!</a></h1></u>-->
            </div>
        </center>
    </body>
    <script src="particles.js"></script>
    <script src="cycle.js"></script>
    <script src="app.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>