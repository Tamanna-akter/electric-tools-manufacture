import React from 'react';
import { useQuery } from 'react-query';
import Loading from "../Shared/Loading";
import Tool from './Tool';

const Tools = () => {

    const {
        data: tools,
        isLoading,
        refetch,
      } = useQuery(["toolsQuery"], () =>
        fetch(`http://localhost:5000/tools`)
        .then((res) => res.json())
      );
    
      if (isLoading) {
        return <Loading></Loading>;
      }

    return (
        <div>
        <h3 className="text-center my-24 text-3xl font-bold">
        Tools
      </h3>
      <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 justify-items-center">
        {tools?.slice(0, 3).map((tool) => (
          <Tool key={tool._id} tool={tool} refetch={refetch}></Tool>
        ))}
      </div>
        </div>
    );
};

export default Tools;