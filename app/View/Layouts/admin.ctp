<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'CakePHP: the rapid development php framework');
$cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>
<!DOCTYPE html>

<html>
<head>
    <?php echo $this->Html->charset(); ?>

    <title>Centre d'affaires et location de bureaux - AASbuilding</title>
    <meta name="description" content="Domiciliation et location de bureaux: nos centres d’affaires sont présents sur 31 villes en France (Paris, Lyon, Toulouse, Nantes, Grenoble, etc.)"><?php
            echo $this->Html->meta(
        'favicon.ico',
        '/favicon.ico',
        array('type' => 'icon')
    );

            echo $this->Html->css('cake.generic');

            echo $this->fetch('meta');
            echo $this->fetch('css');
            echo $this->fetch('script');
            echo $this->Html->css('bootstrap.min');
            echo $this->Html->css('style');
        ?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-59067103-1', 'auto');
  ga('send', 'pageview');

</script>
</head>

<body>
    <nav class="navbar navbar-default">
        <h1 class="title"><span>AAS</span> <span>Building</span></h1>

        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span> </button>
            </div>

            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="/" title="Accueil">Accueil</a></li>

                    <li><a href="#" title="Les services">Les services</a></li>

                    <li><a href="#" title="Le réseau">Le réseau</a></li>

                    <li><a href="#" title="Plan du site">Plan du site</a></li>

                    <li><a href="#" title="Nous contacter">Nous contacter</a></li>
                </ul><?= $this->
                Html->link('Accéder à l\'administration', array('controller' => 'admin'),array('class' => 'connect_link')); ?> <?= $this->
                Html->link('Se déconnecter', array('controller' => 'users', 'action' => 'logout'),array('class' => 'connect_link')); ?>
            </div>
        </div>
    </nav><?php echo $this->Session->flash(); ?><?php echo $this->fetch('content'); ?>

    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 center_f" >
                    © 2010 aas building centres d'affaires et location de bureaux. Tous droits réservés.
                </div>
            </div>
        </div>
    </footer><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" type="text/javascript">
</script>
<?php echo $this->Html->script('bootstrap.min'); ?>
<?php echo $this->Html->script('html5shiv.min'); ?>
</body>
</html>
