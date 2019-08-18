const DNAtoRNA = require('../dna_to_rna_conversion');

describe('should replace thymine with uracil', () => {
  it('will convert TTTT to UUUU', () => {
    expect(DNAtoRNA('TTTT')).toBe('UUUU');
  })
  it('will convert GCAT to GCAU', () => {
    expect(DNAtoRNA('GCAT')).toBe('GCAU')
  })
  it('will convert gcat to GCAU', () => {
    expect(DNAtoRNA('gcat')).toBe('GCAU')
  })
  it('will convert GACCGCCGCC to GACCGCCGCC', () => {
    expect(DNAtoRNA('GACCGCCGCC')).toBe('GACCGCCGCC')
  })
})