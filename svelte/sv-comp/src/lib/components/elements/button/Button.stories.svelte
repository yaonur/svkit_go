<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Button from './Button.svelte';
</script>

<Meta title="elements/button" component={Button}/>

<Template let:args>
    <Button {...args}></Button>
</Template>

<Story name="Button Primary" args={{primary: true}}>
    Slot Test
</Story>

<Story name="Button Secondary" args={{primary: false}}>
</Story>