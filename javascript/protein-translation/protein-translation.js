export const translate = input => {
    let result = [];
    if (input == null || input == '') {
        return result;
    }
    let splittedInput = input.match(/.{1,3}/g);
    for (let codon of splittedInput) {
        if (codons.hasOwnProperty(codon) === false) {
            throw new Error('Invalid codon');
        } else if (codon === 'UAA' || codon === 'UAG' || codon === 'UGA') {
            break;
        } else
            result.push(codons[codon]);
    }
    return result;
}

const codons = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP'
};