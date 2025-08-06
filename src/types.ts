interface Ability {
    ability: { 
        name: string;
        url: string;
    }
    is_hidden: boolean; 
    slot: number
}

interface Cries {
    latest: string;
    legacy: string;
}

interface Forms {
    name: string;
    url: string;
}

interface GameIndex {
    game_index: number;
    version: {
        name: string;
        url: string;
    };
}

interface Move {
    move: { 
        name: string;
        url: string;
    }
    version_group_details: Array<{
        level_learned_at: number;
        move_learn_method: {
            name: string;
            url: string;
        };
        order: number | null;
        version_group: {
            name: string;
            url: string;
        };
    }>;
}

interface PastAbilitiy {
    ability: Array<Ability>;
    generation: {
        name: string;
        url: string;
    };
}

interface Specie {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: { 
        name: string;
        url: string;
    }
}

interface Type {
    slot: number;
    type: { 
        name: string;
        url: string;
    }
}

export interface PokemonData {
    abilities?: Array<Ability>;
    base_experience?: number;
    cries?: Cries;
    forms?: Array<Forms>;
    game_indices?: Array<GameIndex>;
    height?: number;
    held_items?: Array<any>;
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    moves: Array<Move>;
    name?: string;
    order?: number;
    past_abilities?: Array<PastAbilitiy>;
    past_types?: Array<any>;
    species?: Array<Specie>;
    sprites?: { [key: string]: any };
    stats: Array<Stat>;
    types?: Array<Type>;
    weight?: number;
}