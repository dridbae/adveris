<div class="contents form">
<?php echo $this->Form->create('Content'); ?>
	<fieldset>
		<legend><?php echo __('Admin Edit Content'); ?></legend>
	<?php
		echo $this->Form->input('id');
		echo $this->Form->input('title');
		echo $this->Form->textarea('content', array('class'=>'ckeditor')); 
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $this->Form->value('Content.id')), array(), __('Are you sure you want to delete # %s?', $this->Form->value('Content.id'))); ?></li>
		<li><?php echo $this->Html->link(__('List Contents'), array('action' => 'index', 'prefix' => 'admin')); ?></li>
		<li><?php echo $this->Html->link(__('List Users'), array('controller' => 'users', 'action' => 'index', 'prefix' => 'admin')); ?> </li>
		<li><?php echo $this->Html->link(__('New User'), array('controller' => 'users', 'action' => 'add', 'prefix' => 'admin')); ?> </li>
	</ul>
</div>
<?php echo $this->Html->script('ckeditor/ckeditor', array('inline' => false));?>