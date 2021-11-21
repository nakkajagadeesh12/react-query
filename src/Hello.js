import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
function Hello() {
  const { isLoading, data, error, isError } = useQuery('fake-api', () =>
    axios.get('https://fakestoreapi.com/products')
  );
  if (isError) {
    return <div>{error.message}</div>;
  }
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {data?.data.map((da) => {
        return (
          <div>
            {Object.keys(da).map((key) => {
              return (
                typeof da[key] !== 'object' && (
                  <div>
                    {key}-{da[key]}
                  </div>
                )
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Hello;
