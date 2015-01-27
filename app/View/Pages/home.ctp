
<div class="container-fluid">
<div class="row">
	<div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li><a href="#">Domiciliation commerciale</a></li>
            <li><a href="#">Permanence téléphonique</a></li>
            <li><a href="#">Location de bureaux équipés</a></li>
            <li><a href="">Secrétariat</a></li>
            <li><a href="">Location de bureaux</a></li>
            <li><a href="">Avantage réseau</a></li>
            <li><a href="">Notre réseau national</a></li>
            <li><a href="">Votre bureau virtuel</a></li>
            <li><a href="">Carte de notre réseau</a></li>
            <li><a href="">Location de bureaux meublés</a></li>
            <li><a href="">Formulaire renseignements</a></li>
            <li><a href="">Adhésion réseau</a></li>
          </ul>
        </div>
       
  </head>
  <body>
	   <div class="col-sm-9 col-md-10">
<div class="col-lg-12">
	<?php foreach($contents as $content)
		{
			echo "<h2>".$content['Content']['title']."</h2>";
			echo $content['Content']['content'];
		} ?>
</div>
	  <div class="col-lg-12">
		  <h2>Où nous trouver</h2>
	  <div class="col-lg-8">
		  
<div id="map-canvas"></div></div>
<div class="col-lg-4"><h3>Nos 32 points d'implantation</h3>

<div class="col-lg-6 ">
<ul class="list-unstyled">
	<li class="map_marker  principal">PROVINCE</li>
	<li class="map_marker Aixenprovence">Aix en Provence</li>
	<li class="map_marker Avignon">Avignon</li>
	<li class="map_marker Aubagne">Aubagne</li>
	<li class="map_marker Besancon">Besancon</li>
	<li class="map_marker Caen">Caen</li>
	<li class="map_marker Grenoble">Grenoble</li>
	<li class="map_marker Mans">Le Mans</li>
	<li class="map_marker Lyon">Lyon</li>
	<li class="map_marker Montpellier">Montpellier</li>
	<li class="map_marker Mulhouse">Mulhouse</li>
	<li class="map_marker Nancy">Nancy</li>
	<li class="map_marker Orange">Orange</li>
	<li class="map_marker Reims">Reims</li>
	<li class="map_marker Rouen">Rouen</li>
	<li class="map_marker Quimper">Quimper</li>
	<li class="map_marker Tours">Tours</li>
	<li class="map_marker Marseille">Marseille</li>
	<li class="map_marker Manosque">Manosque</li>
	<li class="map_marker Nantes">Nantes</li>
	<li class="map_marker Nimes">Nîmes</li>
	<li class="map_marker Ptamousson">Pont-à-Mousson</li>
	<li class="map_marker Toulouse">Toulouse</li>
	<li class="map_marker Valence">Valence</li>	
	</ul>
</div>
<div class="col-lg-6">
	
	<ul class="list-unstyled">
		<li class="map_marker Paris principal">RP</li>
		<li class="map_marker Asnieres">Asnières</li>
		<li class="map_marker Creteil">Créteil</li>
		<li class="map_marker Paris4">Paris 4ème</li>
		<li class="map_marker Paris17">Paris 17ème</li>
		<li class="map_marker Marne">Marne la Vallée</li>
		<li class="map_marker Rungis">Orly Rungis</li>
		<li class="map_marker Stmaur">St Maur des fossés</li>
	</ul>
</div>

</div>
	  </div>
	        <div class="col-lg-12">
		        <div class="col-lg-3">
			        <ul class="list-unstyled">
				        <li><a href="#" title="Location bureaux">Location bureaux</a></li>
				        <li><a href="#" title="Adhésion résea">Adhésion réseau</a></li>
				        <li><a href="#" title="Avantage réseau">Avantage réseau</a></li>
				        <li><a href="#" title="Carte de notre réseau">Carte de notre réseau</a></li>
			        </ul>
		        </div>
		        	        <div class="col-lg-3">
			        <ul class="list-unstyled">
				        <li><a href="#" title="Domiciliation commerciale">Domiciliation commerciale</a></li>
				        <li><a href="#" title="Formulaire renseignements">Formulaire renseignements</a></li>
				        <li><a href="#" title="Les relais multi-site">Les relais multi-site</a></li>
			        </ul>
		        </div>
		        	        <div class="col-lg-3">
			        <ul class="list-unstyled">
				        <li><a href="#" title="Les services">Les services</a></li>
				        <li><a href="#" title="Location de bureaux">Location de bureaux</a></li>
				        <li><a href="#" title="Notre réseau national">Notre réseau national</a></li>
				        <li><a href="#" title="Notre réseau international">Notre réseau international</a></li>
			        </ul>
		        </div>
		        	        <div class="col-lg-3">
			        <ul class="list-unstyled">
				        <li><a href="#" title="Permanence Téléphonique">Permanence Téléphonique</a></li>
				        <li><a href="#" title="Plan du site">Plan du site</a></li>
				        <li><a href="#" title="Secrétariat">Secrétariat</a></li>
				        <li><a href="#" tile="Centre d'Affaire">Centre d'affaire</a></li>
			        </ul>
		        </div>

        </div>
        </div>
</div>
     
    </div>

      <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxjyyNSsrXBEJbsUpPrVcxdGcGebHsvdE">
    </script>
    <?php echo $this->Html->script('map'); ?>
    <script type="text/javascript">
       google.maps.event.addDomListener(window, 'load', initialize_map);
    </script>
