import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { AddMoreItems } from './utilities'

export function IncrementItem() {
  const { incrementItem, cartDetails } = useShoppingCart()

  const entries = []
  for (const sku in cartDetails) {
    const entry = cartDetails[sku]
    entries.push(
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%'
        }}
      >
        <figure style={{ textAlign: 'center' }}>
          <img
            style={{ height: 200, width: 250 }}
            src={entry.image}
            alt={entry.name}
          />
          <figcaption>{entry.name}</figcaption>
        </figure>
        <p>{entry.formattedValue}</p>

        <section
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          {/* Increases the quantity of the item */}
          <button
            onClick={() => incrementItem(sku)}
            aria-label={`Add one ${entry.name} to your cart`}
            style={{ height: 50, width: 100, marginBottom: 30 }}
          >
            Add one {entry.name} to your cart
          </button>

          {/* Increases the item quantity by 10 */}
          <button
            onClick={() => incrementItem(sku, 10)}
            aria-label={`Add ten ${entry.name} to your cart`}
            style={{ height: 50, width: 100, marginBottom: 30 }}
          >
            Add 10 {entry.name} to your cart
          </button>
        </section>
      </article>
    )
  }

  if (entries.length) return entries
  return <AddMoreItems />
}

export default IncrementItem
