<div class="contents view">
<h2><?php echo __('Content'); ?></h2>
	<table cellpadding="0" cellspacing="0">
		<tr><?php echo __('Id'); ?></tr>
		<td>
			<?php echo h($content['Content']['id']); ?>
			&nbsp;
		</td>
		<tr><?php echo __('User'); ?></tr>
		<td>
			<?php echo $this->Html->link($content['User']['id'], array('controller' => 'users', 'action' => 'view', $content['User']['id'])); ?>
			&nbsp;
		</td>
		<td><?php echo __('Title'); ?></td>
		<td>
			<?php echo h($content['Content']['title']); ?>
			&nbsp;
		</td>
		<td><?php echo __('Content'); ?></td>
		<td>
			<?php echo h($content['Content']['content']); ?>
			&nbsp;
		</td>
		<td><?php echo __('Update Date'); ?></td>
		<td>
			<?php echo h($content['Content']['update_date']); ?>
			&nbsp;
		</td>
	</table>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('Edit Content'), array('action' => 'edit', $content['Content']['id'])); ?> </li>
		<li><?php echo $this->Form->postLink(__('Delete Content'), array('action' => 'delete', $content['Content']['id']), array(), __('Are you sure you want to delete # %s?', $content['Content']['id'])); ?> </li>
		<li><?php echo $this->Html->link(__('List Contents'), array('action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Content'), array('action' => 'atd')); ?> </li>
		<li><?php echo $this->Html->link(__('List Users'), array('controller' => 'users', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New User'), array('controller' => 'users', 'action' => 'atd')); ?> </li>
	</ul>
</div>
