<script lang="ts">
	import { FormGroup, Input, InputGroup, InputGroupText } from 'sveltestrap';
	let valueToBind = 'string';
	let changed = false;
	let originalValue = '2';
	export const changeValue = () => {
		if (originalValue !== valueToBind) {
			changed = true;
		} else {
			changed = false;
		}
		return changed;
	};
</script>

<FormGroup>
	<InputGroup>
		<Input type="text" bind:value={valueToBind} />
		{valueToBind}
		<InputGroupText>
			[{originalValue}]
		</InputGroupText>
	</InputGroup>
</FormGroup>
