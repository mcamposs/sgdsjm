<!DOCTYPE html>
<html <?php language_attributes();?>>
<head>

	<meta charset="<?php bloginfo( 'charset' );?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<style>
	.sinespacios {
    	margin: 0 !important;
    	padding: 0 !important;
	}
	.fijo{
	position: fixed;
	top:20px;
	width:100%;
	height:20px;
	z-index:9999;

	background-color:black;
	color:white;
}

.content{
	margin-top:20px;
}
</style>
<?php wp_head();?>
</head>
 
<body <?php body_class();?>>

	<div class="container-fluid fijo">
		<div class="row">
			<div class="col-sm-4">
				<?php echo do_shortcode('[wonderplugin_slider id=2]'); ?>
			</div>
			<div class="col-sm-8 text-right">
				<?php wp_megamenu(array('menu' => '2')); ?>
			</div>
		</div>
	</div>
	<div class="container-fluid sinespacios content">
		<?php echo do_shortcode('[wonderplugin_slider id=1]'); ?>
	</div>

