export const getResource = async (name) => {
    const data = await fetch(`https://my-json-server.typicode.com/vovinov/welbex-test/${name}`);
    return await data.json();
}