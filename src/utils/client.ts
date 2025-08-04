const getData = async (url: string): Promise<any> => {
    console.log(`Calling URL: ${url}`);
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Failed to get ok response from URL: ${url}. Response status: ${response.status}`);
        }
        return await response.json();
    } catch (error: unknown){
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
}

export {
    getData
}