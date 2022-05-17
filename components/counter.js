
import { Head } from 'next/document';
import { useState, useEffect } from 'react';

function counter (){
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });
    return (
        <div>
            
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count < 10 ? count + 1 : count)}>
                Increment
            </button>

            <button onClick={() => setCount( count > 0 ? count - 1 : count)}>
                Decrement
            </button>
        </div>
    );
}

export default counter;