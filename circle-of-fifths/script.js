const keyData = {
    'C': {
        signature: 'No sharps or flats',
        scale: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
        relative: 'Am',
        chords: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim']
    },
    'G': {
        signature: '1 sharp (F♯)',
        scale: ['G', 'A', 'B', 'C', 'D', 'E', 'F♯'],
        relative: 'Em',
        chords: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F♯dim']
    },
    'D': {
        signature: '2 sharps (F♯, C♯)',
        scale: ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯'],
        relative: 'Bm',
        chords: ['D', 'Em', 'F♯m', 'G', 'A', 'Bm', 'C♯dim']
    },
    'A': {
        signature: '3 sharps (F♯, C♯, G♯)',
        scale: ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯'],
        relative: 'F#m',
        chords: ['A', 'Bm', 'C♯m', 'D', 'E', 'F♯m', 'G♯dim']
    },
    'E': {
        signature: '4 sharps (F♯, C♯, G♯, D♯)',
        scale: ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯'],
        relative: 'C#m',
        chords: ['E', 'F♯m', 'G♯m', 'A', 'B', 'C♯m', 'D♯dim']
    },
    'B': {
        signature: '5 sharps (F♯, C♯, G♯, D♯, A♯)',
        scale: ['B', 'C♯', 'D♯', 'E', 'F♯', 'G♯', 'A♯'],
        relative: 'G#m',
        chords: ['B', 'C♯m', 'D♯m', 'E', 'F♯', 'G♯m', 'A♯dim']
    },
    'F#': {
        signature: '6 sharps (F♯, C♯, G♯, D♯, A♯, E♯)',
        scale: ['F♯', 'G♯', 'A♯', 'B', 'C♯', 'D♯', 'E♯'],
        relative: 'D#m',
        chords: ['F♯', 'G♯m', 'A♯m', 'B', 'C♯', 'D♯m', 'E♯dim']
    },
    'Db': {
        signature: '5 flats (B♭, E♭, A♭, D♭, G♭)',
        scale: ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'],
        relative: 'Bbm',
        chords: ['D♭', 'E♭m', 'Fm', 'G♭', 'A♭', 'B♭m', 'Cdim']
    },
    'Ab': {
        signature: '4 flats (B♭, E♭, A♭, D♭)',
        scale: ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G'],
        relative: 'Fm',
        chords: ['A♭', 'B♭m', 'Cm', 'D♭', 'E♭', 'Fm', 'Gdim']
    },
    'Eb': {
        signature: '3 flats (B♭, E♭, A♭)',
        scale: ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D'],
        relative: 'Cm',
        chords: ['E♭', 'Fm', 'Gm', 'A♭', 'B♭', 'Cm', 'Ddim']
    },
    'Bb': {
        signature: '2 flats (B♭, E♭)',
        scale: ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'],
        relative: 'Gm',
        chords: ['B♭', 'Cm', 'Dm', 'E♭', 'F', 'Gm', 'Adim']
    },
    'F': {
        signature: '1 flat (B♭)',
        scale: ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'],
        relative: 'Dm',
        chords: ['F', 'Gm', 'Am', 'B♭', 'C', 'Dm', 'Edim']
    }
};

// Add relative major keys for minor keys
const minorKeys = {};
for (const [major, data] of Object.entries(keyData)) {
    minorKeys[data.relative] = {
        signature: data.signature,
        scale: [...data.scale.slice(5), ...data.scale.slice(0, 5)],
        relative: major,
        chords: [...data.chords.slice(5), ...data.chords.slice(0, 5)]
    };
}

Object.assign(keyData, minorKeys);

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        // Remove active class from all keys
        document.querySelectorAll('.key').forEach(k => k.classList.remove('active'));
        
        // Add active class to clicked key and its relative
        const noteData = keyData[key.dataset.note];
        const relativeKey = document.querySelector(`[data-note="${noteData.relative}"]`);
        
        key.classList.add('active');
        relativeKey.classList.add('active');

        // Update info panel
        document.getElementById('selected-key').textContent = key.dataset.note;
        document.getElementById('relative-key').textContent = noteData.relative;
        document.getElementById('key-signature').textContent = noteData.signature;
        document.getElementById('scale-notes-text').textContent = noteData.scale.join(', ');
        document.getElementById('chord-progression-text').textContent = 
            noteData.chords.slice(0, 4).join(' - ') + ' (I - ii - iii - IV)';
    });
});

// Initially select C major
document.querySelector('[data-note="C"]').click();
