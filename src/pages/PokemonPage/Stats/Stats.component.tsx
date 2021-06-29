import React from 'react';
import './Stats.scss';

const Stats = (props:any) => {

    return (
        <div className='stats'>

            <h2 className='stats-base-title'>Base Stats</h2>

            {
                props.pokemonSelected.single &&
                    props.pokemonSelected.single.stats.map((el:any, index:number)=>{
                        return(
                            <div key={index} className='stats-container'>

                                <div className='stats-title-container'>
                                    <h3 className='stats-title'>{el.stat.name}</h3>
                                </div>

                                <div className='stats-text-container'>
                                    <h4 className='stats-text'>{el.base_stat}</h4>
                                </div>

                                <div className='stats-div-container'>

                                    <div className='stats-div-one'>

                                        <div 
                                            className={`stats-div-two ${props.pokemonSelected.single.types[0].type.name}`}
                                            style={ el.base_stat > 100 ?
                                            {width : "100%"}
                                            :
                                            {width : `${el.base_stat}%`}
                                        }
                                        ></div>

                                    </div>

                                </div>

                            </div>
                        )
                    })
            }

        </div>
    )
}

export default Stats;
