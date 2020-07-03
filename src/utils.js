export const getResource = async (name) => {
    const data = await fetch(`https://my-json-server.typicode.com/vovinov/test-welbex/${name}`);
    return await data.json();
}