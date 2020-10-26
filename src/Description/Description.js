import React from 'react';
import "./Description.css";

const Description = ({title}) => {
    return (
        <div className={"desc"}>
            <h2 className={"desc-title"}>{title}</h2>
            <div className="desc-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi assumenda blanditiis commodi consequatur dignissimos doloremque labore laborum, modi, non optio quia rem sed ut voluptate voluptatum! Adipisci aliquam consectetur ea enim eum eveniet explicabo, incidunt minima quibusdam quis rerum sed sit sunt tempora temporibus! Aliquid aperiam cum enim laborum qui quibusdam quis recusandae sequi, tempora vero? A accusantium animi aperiam at atque aut autem delectus dolore dolorem dolores ea eaque est eveniet excepturi exercitationem ipsa ipsum iure libero maiores modi mollitia necessitatibus perferendis possimus quae quas qui quia recusandae, rem sed sit tempore ut velit veritatis! Dolore ducimus exercitationem laborum minima modi molestias soluta tempora vitae voluptatibus. Architecto asperiores atque delectus doloremque ea eaque earum et expedita laudantium non optio, quia, quod quos, reiciendis velit. Accusantium consectetur culpa delectus dicta dignissimos doloremque facilis hic ipsa itaque laboriosam maiores, maxime minus modi nostrum officia quam quidem rem voluptate voluptatem.</div>
        </div>
    );
};

export default Description;