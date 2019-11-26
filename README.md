# some-test-action-12345

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

````- name: Hello world
      uses: actions/some-test-action-12345@v1
      with:
        who-to-greet: 'Mona the Octocat'
````
